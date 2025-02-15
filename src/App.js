import './App.css';
import Header from './components/Header';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
