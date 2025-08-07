import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductsOverview from "@/components/ProductsOverview"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Scroll from "@/components/HorizontalScrollCards"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#fff7ed] to-[#f8fafc]">
      <Header />
      <div className="relative z-10">
        <Hero />
        <div className="overflow-x-auto">
          <Scroll />
        </div>
        {/* <ProductsOverview /> */}
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
