import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Content from './components/Content/Content';
import Blog from './components/Blog/Blog';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter'

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Services/>
    <Content/>
    <Blog/>
    <Counter/>
    <Section/>
    <Footer/>
    </>
  )
}

export default App;
