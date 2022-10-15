import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';

export default function App() {
  return (
    <h1 className="bg-dark w-full h-screen overflow-hidden z-0">
      <div className="">
        <img className="absolute bottom-1 left-10" alt="blur-cyan" src={require('./assets/blur-cyan.png')} />
        <img className="absolute bottom-1 right-10" alt="blur-indigo" src={require('./assets/blur-indigo.png')} />
      </div>
      <Header />
      <Main />
      <Footer />
    </h1>
  )
}