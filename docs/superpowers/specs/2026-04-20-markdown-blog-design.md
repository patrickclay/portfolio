# Markdown Blog — Design Spec

**Date:** 2026-04-20
**Status:** Draft
**Author:** Patrick Boggs (with Claude)

## Summary

Add a file-based Markdown blog to the portfolio site. Authors publish by dropping a `.md` file into `content/blog/`. The `/blog` listing renders a card per post (title, date, blurb, "Read more →") that links to a fully prerendered post page at `/blog/<slug>`. Build-time rendering keeps the runtime HTML-only for blog content. SEO basics (per-post metadata, canonical URLs, JSON-LD `Article`, sitemap, robots) are included.

## Goals

- One-step publishing: add a Markdown file, commit, deploy.
- All blog routes are statically generated (zero server runtime cost, zero client JS for article content).
- Strong baseline SEO: per-post metadata, OpenGraph, canonical, JSON-LD, sitemap, robots.
- File structure that can later upgrade to MDX (React components in posts) without re-architecting routes or the loader API.

## Non-Goals (deferred)

- MDX / React components inside posts
- Drafts, tags, reading time, cover images
- RSS feed
- Auto-generated OG images (per-post social cards)
- Code syntax highlighting

These are intentionally deferred to keep the first cut small. Each can be added later without restructuring.

## Authoring Workflow

1. Create `content/blog/<slug>.md`. The filename (sans `.md`) becomes the URL slug.
2. Add YAML frontmatter and write Markdown:

   ```md
   ---
   title: My Post Title
   date: 2026-04-25
   description: Short blurb shown on the listing and in search results.
   ---

   Body in Markdown.
   ```

3. Commit + push. Vercel rebuilds; the post appears on `/blog` and at `/blog/<slug>`.

The `description` field doubles as the listing blurb and the `<meta name="description">` value.

## File Layout

```
content/blog/                 # Markdown source (new)
  hello-world.md

lib/blog.ts                   # server-only post loader (new)

app/
  blog/
    page.tsx                  # listing — replaces current stub
    [slug]/page.tsx           # post page (new)
  sitemap.ts                  # dynamic sitemap (new)
  robots.ts                   # robots.txt (new)

components/
  PostCard.tsx                # listing card (new)
```

`lib/blog.ts` is the single boundary that touches the filesystem. Pages and the sitemap consume its API. A future move to MDX, a CMS, or a database is a one-file change.

## Data Model

```ts
type PostMeta = {
  slug: string;          // filename without .md
  title: string;         // from frontmatter
  date: string;          // ISO YYYY-MM-DD, from frontmatter
  description: string;   // from frontmatter; serves as blurb + meta description
};

type Post = PostMeta & {
  html: string;          // rendered HTML body (frontmatter stripped)
};
```

## Loader (`lib/blog.ts`)

Server-only module. Public API:

- `getAllPostMeta(): PostMeta[]` — sorted by `date` descending. Used by the listing and sitemap.
- `getPost(slug: string): Post | null` — returns the post or `null` for unknown slugs.

Implementation:

- Reads `content/blog/*.md` with `fs.readdirSync` / `fs.readFileSync`. Sync I/O is acceptable because this only runs at build.
- `gray-matter` parses frontmatter; `remark().use(remarkHtml).process(body)` renders HTML.
- Slug is derived from the filename (stem).
- Validates that `title`, `date`, `description` are present and that `date` is a valid `YYYY-MM-DD`. Missing/invalid → throw at build (loud failure beats silently broken posts).
- Results memoized in module scope so multiple callers in one build don't re-read disk.

## Routes

### Listing — `app/blog/page.tsx`

Server component. Replaces the current stub.

- Calls `getAllPostMeta()`.
- Reuses existing chrome (`BackgroundArt`, `Footer`, current `<h1>Blog</h1>` and tagline).
- Renders one `<PostCard>` per post.
- Shows the existing "Posts coming soon" empty state only when there are zero posts.
- Static metadata stays as it is today.

### Post — `app/blog/[slug]/page.tsx`

Server component. Fully static.

- `generateStaticParams()` returns every slug — every post is prerendered at build.
- `export const dynamicParams = false` — unknown slugs 404 instead of attempting render.
- `generateMetadata({ params })` returns per-post `title`, `description`, `openGraph`, and `alternates.canonical` set to `${SITE_URL}/blog/<slug>`.
- Renders inside the same `BackgroundArt` + `Footer` chrome.
- Article body: `<article>` with header (`<h1>` title, `<time dateTime={iso}>` date), then the rendered HTML via `dangerouslySetInnerHTML`. Safe — input is the author's own files, not user content.
- JSON-LD `Article` schema injected via inline `<script type="application/ld+json">` — server-rendered, no client JS.

## Components

### `PostCard` (server component)

- `<article>` wrapper, styled to match existing card surfaces (`rounded-xl border border-slate-700/30 bg-white/[0.04] p-6`).
- `<h2><Link href="/blog/[slug]">{title}</Link></h2>` — the title is the primary link.
- Date as `<time dateTime={iso}>` — semantic and friendly to crawlers.
- Description as the blurb paragraph.
- "Read more →" link to the same `/blog/[slug]` (redundant click target; intentional for usability and to give the link a clear textual affordance for screen readers).

## Styling

A small custom CSS block in `app/globals.css`, scoped to a class such as `.article-prose`, applied to the rendered HTML container on the post page. Covers headings, paragraphs, lists, links, inline `code`, `<pre>`, blockquotes — sized and colored to match the existing dark / cyan-accent aesthetic. No Tailwind Typography plugin (avoids a dependency and a styling pass to retheme it).

## SEO

### Per-post metadata

`generateMetadata` produces:

- `title`
- `description`
- `openGraph.title`, `openGraph.description`, `openGraph.type: "article"`, `openGraph.url`, `openGraph.publishedTime`
- `alternates.canonical` (absolute URL)

### JSON-LD `Article` schema

Inline `<script type="application/ld+json">` on each post page with at minimum `@type: "Article"`, `headline`, `datePublished`, `description`, `url`, `author`.

### `app/sitemap.ts`

Default export returns an array including:

- `/` and `/blog` (static)
- One entry per post with `lastModified` set to the post `date`.

Next serves the result at `/sitemap.xml`.

### `app/robots.ts`

Default export allows all user agents and points to the sitemap. Next serves at `/robots.txt`.

### Site URL

A `NEXT_PUBLIC_SITE_URL` environment variable (e.g. `https://patrickboggs.com`) supplies the absolute base. A sensible local fallback (`http://localhost:3000`) avoids breaking dev. The same constant is the source of truth for canonical URLs, JSON-LD `url`, sitemap entries, and OpenGraph URLs.

## Performance

- Every blog route compiles to a static HTML file. No SSR at request time.
- Post pages ship zero JS for the article itself. The existing `BackgroundArt` client component remains the only client JS on the page (already present on `/blog`).
- Markdown parsing happens at build, not at request time.
- Loader memoization avoids redundant disk reads across `generateStaticParams`, `generateMetadata`, and the page render within a single build.

## Dependencies

New (all server-side, all execute at build):

- `gray-matter`
- `remark`
- `remark-html`

No new client-side dependencies. No Tailwind plugins. No new client components.

## Error Handling

- Missing required frontmatter field → loader throws with a message naming the file and field. Build fails. Surfaces problems before deploy.
- Invalid date format → same behavior.
- Unknown slug at runtime → 404 (via `dynamicParams = false`).
- Empty `content/blog/` → listing shows the existing "Posts coming soon" empty state. Sitemap includes only `/` and `/blog`.

## Testing Approach

This is a content/render system on a small static site. Testing is light by design:

- **Manual smoke test**: add a sample `hello-world.md`, run `next dev`, verify `/blog` lists it and `/blog/hello-world` renders correctly with title, date, body.
- **Build verification**: `next build` must succeed. The build will fail loudly if the loader rejects malformed frontmatter — that is the intended safety net.
- **SEO spot check**: `view-source` on the post page confirms `<meta name="description">`, canonical link, OpenGraph tags, and JSON-LD script are present. Hit `/sitemap.xml` and `/robots.txt` to confirm they include the post.

No automated test suite exists in the repo today; we are not introducing one as part of this change.

## Future Upgrade Paths

The design preserves cheap upgrades to deferred features:

- **Drafts**: add `draft?: boolean` to frontmatter; loader filters in production.
- **Tags / reading time**: extend `PostMeta`, surface in `PostCard`.
- **MDX**: change `lib/blog.ts` to use `@next/mdx` or `next-mdx-remote`; routes and components stay the same.
- **RSS**: add `app/feed.xml/route.ts` driven by `getAllPostMeta()`.
- **OG images**: add `app/blog/[slug]/opengraph-image.tsx` using Next's built-in convention.
- **Syntax highlighting**: add `rehype-pretty-code` to the remark/rehype pipeline.
