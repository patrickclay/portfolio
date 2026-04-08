import { Hero } from "@/components/Hero";
import { EnterpriseAI } from "@/components/EnterpriseAI";
import { ProductsBuilt } from "@/components/ProductsBuilt";
import { ClientDelivery } from "@/components/ClientDelivery";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EnterpriseAI />
      <ProductsBuilt />
      <ClientDelivery />
      <About />
      <Footer />
    </main>
  );
}
