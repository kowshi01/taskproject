import './App.css';
import Footer from './components/Footer';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Heading/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
