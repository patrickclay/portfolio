import { Hero } from "@/components/Hero";
import { EnterpriseAI } from "@/components/EnterpriseAI";
import { ProductsBuilt } from "@/components/ProductsBuilt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EnterpriseAI />
      <ProductsBuilt />
    </main>
  );
}
