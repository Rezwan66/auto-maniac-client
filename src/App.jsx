import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/cool-background.png)' }}
      >
        <div className="max-w-[1440px] min-h-screen mx-auto">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <div className=""></div>
    </>
  );
}

export default App;
