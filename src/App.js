import './App.css';
import Header from "./Header/Header"
import Cover from './Cover/Cover'
import About from './About/About';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';
import Footer from "./Footer/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
