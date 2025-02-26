import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Blog from "../components/Blog/Blog"
import Project from "../components/Project/Project"

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <div id="blog"><Blog /></div>
            <div id="projetos"><Project /></div>
            <Footer />
        </>
    )
}

export default Home