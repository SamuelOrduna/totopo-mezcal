import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import AgeGate from './components/AgeGate'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import GallerySection from './components/GallerySection'
import ProcessSection from './components/ProcessSection'
import LandscapeBanner from './components/LandscapeBanner'
import ProductSection from './components/ProductSection'
import ContactFooter from './components/ContactFooter'
import CartDrawer from './components/CartDrawer'
import CartBar from './components/CartBar'
import InstallBanner from './components/InstallBanner'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <AgeGate />
      <AnimatePresence>{showSplash && <Splash onFinish={() => setShowSplash(false)} />}</AnimatePresence>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <StorySection />
        <GallerySection />
        <ProcessSection />
        <LandscapeBanner />
        <ProductSection />
      </main>
      <ContactFooter />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      {!cartOpen && (
        <>
          <CartBar onOpen={() => setCartOpen(true)} />
          <InstallBanner />
        </>
      )}
    </CartProvider>
  )
}
