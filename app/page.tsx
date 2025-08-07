import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductsOverview from "@/components/ProductsOverview"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Scroll from "@/components/HorizontalScrollCards"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7ed] to-[#f8fafc]">
      <Header />
      <div className="relative z-10">
        <Hero />
        <Scroll />
        {/* <ProductsOverview /> */}
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
