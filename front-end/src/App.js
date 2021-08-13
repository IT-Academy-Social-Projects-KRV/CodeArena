import './App.css';
import Header from '../src/Components/Header/Header';
import Footer from '../src/Components/Footer/Footer';
import MainContainer from '../src/Components/HomePage/MainContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;