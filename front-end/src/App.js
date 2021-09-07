import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth_Header from './Components/Header/Auth_Header';
import Header from '../src/Components/Header/Header';


{/* Auth_Header - use for registered users */ }
{/* Header - use for unregistered users */ }

function App() {
  return (
    <>
      <Auth_Header />
      {/* <Header /> */}
    </>
  );
}

export default App;
