
import Features from '../features/features'
import Footer from '../footer/footer'
import Header from '../header/header'
import HeroSection from '../hero/hero'
import styles from './home.module.css'

export default function HomePage () {

    return (
        <main>
            <Header/>
            <HeroSection/>
            <Features/>
            <Footer/>
        </main>
    )
}