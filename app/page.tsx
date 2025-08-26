import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductsOverview from "@/components/ProductsOverview"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Scroll from "@/components/HorizontalScrollCards"
import HowItWorks from "@/components/HowitWorks"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      {/* Modern Background with Gradient Mesh */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/20" />
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      </div>

      <Header />
      
      <div className="relative z-10">
        <Hero />
        
        {/* Horizontal Scroll Section with improved spacing */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="overflow-x-auto">
            <Scroll />
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <HowItWorks />
        </section>
        
        {/* FAQ Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <FAQ />
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
