import getDate from "../utils";
import Card from "./Card";

const Week = ({weather}) => {
    return (
        weather && <div className="week container">
        {/* loop through data object received from server and show forecast for each day */}
            {weather.map(date => {
                // helper func that converts date from unixTime 
                const day = getDate(date.dt);
                return (
                    <div key={date.dt} className="weekday">
                        <p className="date">{day.date + " " + day.month + ",  " + day.day}</p>
                        <Card data={date} short={true}/>
                        <div>
                            <p className="max">Max: <span>{date.temp.max}</span>&#8451;</p>
                            <p className="min">Min: <span>{date.temp.min}</span>&#8451;</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Week;