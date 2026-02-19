import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200">
      <Navbar />

      <main className="pt-14">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  )
}
