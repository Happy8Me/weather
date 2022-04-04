import PropTypes from 'prop-types';
import Card from "./Card";
import getDate from "../utils";

const Now = ({weather}) => {
    // helper func that converts date from unixTime 
    const day = getDate(weather && weather.dt);
    return (
        weather && <div className="now container">   
            <p className="date">{day.date + " " + day.month + ",  " + day.day}</p>
            <Card data={weather} short={false}/>  
        </div>
    )
};

Now.propTypes = {
    weather: PropTypes.object,
};

export default Now;