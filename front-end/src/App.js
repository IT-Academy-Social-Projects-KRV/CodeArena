import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth_Header from './Components/Header/Auth_Header';
import Header from '../src/Components/Header/Header';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';


{/* Auth_Header - use for registered users */ }
{/* Header - use for unregistered users */ }

function App() {
  return (
    <>
      <Auth_Header />
      {/* <Header /> */}
      <Footer />
    </>
  );
}

export default App;
