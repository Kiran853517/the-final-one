import Header from './components/Header'
import Hero from './components/Hero'
import QuickServices from './components/QuickServices'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Marquee from './components/Marquee'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import Pujas from './components/Pujas'
import ConsultationCTA from './components/ConsultationCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

// App.jsx is the "table of contents" for the whole site.
// It doesn't contain much logic itself — it just puts every section
// component in order. If you want to reorder sections, reorder them here.
export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <QuickServices />
        <About />
        <Stats />
        <Services />
        <Expertise />
        <Marquee />
        <WhyChooseUs />
        <Testimonials />
        <Videos />
        <Gallery />
        <Pujas />
        <ConsultationCTA />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}
