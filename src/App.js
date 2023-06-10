import './css/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Offer from './components/Offer';
import Team from './components/Team';
import Call from './components/Call';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Offer />
      <Team />
      <Call />
      <Footer />
    </div>
  );
}

export default App;
