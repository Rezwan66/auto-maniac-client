import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  // const [isDarkMode, setDarkMode] = React.useState(false);
  // const toggleDarkMode = checked:boolean => {
  //   setDarkMode(checked);
  // };
  return (
    <>
      {/* <div
        className="min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/light.svg)' }}
      ></div> */}

      <div className="">
        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
        /> */}
      </div>

      <div className="max-w-7xl min-h-screen mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
