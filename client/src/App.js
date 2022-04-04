import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import useWeather from "./hooks/useWeather";
import Form from "./components/Form";
import Error from "./components/Error";
import Page404 from "./components/Page404";
import Loader from "./components/Loader";
import TwoDays from "./components/TwoDays";
import Week from "./components/Week";
import Now from "./components/Now";
import Menu from "./components/Menu.jsx"
import Theme from "./components/Theme";
import "./styles/styles.scss";

function App() {
  // color theme state
  const [colorTheme, setColorTheme] = useState('theme-grey');
  // get error state, loading state, server response from custome hook
  const {error, loading, weather, search} = useWeather();

  const submitForm = async val => {
    await search(val)
  }

  useEffect(()=>{ 
    //check if there is a theme-color value in localStorage. If found, set as colorTheme state 
    const currentThemeColor = localStorage.getItem('theme-color');
    if(currentThemeColor) {
      setColorTheme(currentThemeColor);  
    }
  }, [])

  return (
    <div className={`App ${colorTheme}`}>

      <Theme setColorTheme={setColorTheme}/>

      <Router>  
        { <Form submitForm={submitForm}/> }
        {/* conditioned display of Error component and loader */}
        { !loading && error && <Error error={error}/> }
        { loading && <Loader /> }

        {/* city for which the forecast is shown */}
        <p className="location">{!loading && !error && weather && weather.location.city + ', ' + weather.location.country}</p>

        {/* conditioned display menu */}
        { !loading && !error && weather && <Menu /> }

    {/* router allows to show certain component for the chosen path */}
        <Routes>
          <Route exact path="/" element={<Now weather={!loading && !error && weather && weather.current}/>} />
          <Route exact path="/twodays" element={<TwoDays weather={!loading && !error && weather && weather.hourly}/>}/>
          <Route exact path="/week" element={<Week weather={!loading && !error && weather && weather.daily}/>}/>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
