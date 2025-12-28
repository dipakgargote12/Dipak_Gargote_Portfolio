import './App.css'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
function App() {
 

  return (
    <>
    <div id='Sidebar' className='Sidebar'>
     <Header/>
     <div id='mainContainer'>
      <Hero/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
     </div>
    </div>
    </>
  )
}

export default App
