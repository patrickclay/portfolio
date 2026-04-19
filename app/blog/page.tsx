import type { Metadata } from "next";
import { BackgroundArt } from "@/components/BackgroundArt";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Patrick Boggs",
  description: "Thoughts on product, technology, and AI-accelerated development.",
};

export default function Blog() {
  return (
    <main className="min-h-screen relative">
      <BackgroundArt />
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-sm font-mono text-slate-400 tracking-wide mb-10">
            Thoughts on product, technology, and AI-accelerated development.
          </p>
          <div className="rounded-xl border border-slate-700/30 bg-white/[0.04] p-8 text-center">
            <p className="text-slate-400 font-mono text-sm">Posts coming soon.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
