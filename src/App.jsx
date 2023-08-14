import './App.css'
import { About } from './components/About'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Onestop } from './components/Onestop'
import { Whatwedo } from './components/Whatwedo'
import {Team} from './components/Team'
import {Newsletter} from './components/Newsletter'
import {ContactUs} from './components/ContactUs'
import {Footer} from './components/Footer'

function App() {

  return ( 
    <>
      <Header />
      <About />
      <Whatwedo />
      <Onestop />
      <Features/>
      <Team/>
      <Newsletter/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
