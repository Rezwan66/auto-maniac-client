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
        style={{ backgroundImage: 'url(/cool-background.png)' }}
      ></div> */}
      <div className="">
        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
        /> */}
        <div className="max-w-[1440px] min-h-screen mx-auto">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
