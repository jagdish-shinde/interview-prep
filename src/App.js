import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import HeroSection from './components/hero/hero';
import Features from './components/features/features';
import Footer from './components/footer/footer';

function App() {
  
  return (
    <main>
      <Header/>
      <HeroSection/>
      <Features/>
      <Footer/>
    </main>
  );
}

export default App;
