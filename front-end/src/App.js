import './App.css';
import Auth from './Header/Auth';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContainer from './HomePage/MainContainer';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;