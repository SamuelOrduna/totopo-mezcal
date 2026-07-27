import AgeGate from './components/AgeGate'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import ProcessSection from './components/ProcessSection'
import ProductSection from './components/ProductSection'
import ContactFooter from './components/ContactFooter'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <AgeGate />
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <ProcessSection />
        <ProductSection />
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </>
  )
}
