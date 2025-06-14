import Nav from './components/Nav'
import Hero from './components/Hero'
import Feature from './components/Feature'
import ChecklistSection from './components/ChelistSection'
import PriceSection from './components/PriceSection'
import Testomonials from './components/Testimonial'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <Nav/>
     <main className='max-w-7xl  mx-auto pt-20 px-6 z-0'>
        <Hero />
        <Feature />
        <ChecklistSection />     
        <PriceSection />  
        <Testomonials /> 
        <Footer />
     </main>
    </>
  )
}

export default App
