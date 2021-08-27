import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/Components/Footer/Footer';
import MainContainer from '../src/Components/HomePage/MainContainer';
import Auth_Header from '../src/Components/Auth_Header/Auth_Header';

function App() {
  return (
    <>
      <Auth_Header />
      <li className='App'>
        <MainContainer />
        <Footer />
      </li>
    </>
  );
}

export default App;