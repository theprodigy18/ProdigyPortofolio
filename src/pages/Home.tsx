import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skiils from "../components/Skiils"

function Home() {
    return (
        <div className="bg-(--background-color-1) w-full min-h-screen overflow-hidden">
            <Navbar />
            <HeroSection />
            <About />
            <Skiils />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
