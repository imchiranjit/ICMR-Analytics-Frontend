import Header2 from '../components/Header2'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from './about'

export default function Homepage() {
  return (
    <>
    <Header2 />
    <div style={{position:"relative", top:"80px"}}>
      <Carousel/>
      <Hero />
      <About />
      <Footer />
    </div>
    </>
  )
}