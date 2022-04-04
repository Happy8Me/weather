import Card from "./Card";
import getDate from "../utils";

const TwoDays = ({weather}) => {
    return (
        weather && <div className="two-days">
            {weather && weather.map(date => {
                const day = getDate(date.dt)
                return (
                    <div key={date.dt}  className="day container">
                        <p className="date">{day.hour + ":00,  " + day.day}</p>
                        <Card data={date} short={false}/>
                    </div>
                )}
            )}
        </div>
    )
};

export default TwoDays;