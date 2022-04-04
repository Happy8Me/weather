import PropTypes from 'prop-types';

const Card = ({data, short=true}) => {
    return (
        short 
        // show less data
        ? (
            <div className="card">
                <div>
                    <img src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} alt="" />   
                    <h3>{data.weather[0].description}</h3>   
                </div>
            </div>
        )
        // show detailed data
        : (
            <div className="card">
                <div>
                    <img src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} alt="" />   
                    <h3>{data.weather[0].description}</h3>     
                    <p><span className="temp">{data.temp}&#8451;</span> feels <span className="temp">{data.feels_like}&#8451;</span></p>
                </div>
                <ul>
                    <li><p>humidity: <span>{data.humidity}</span> %</p></li>
                    <li><p>clouds: <span>{data.clouds}</span> %</p></li>
                    <li><p>pressure: <span>{data.pressure}</span> hPa</p></li>
                    <li><p>UV index: <span>{data.uvi}</span> </p></li>
                    <li><p>wind: <span>{data.wind_speed}</span> metre/sec</p></li>   
                </ul>
            </div>
        )
    )
}

Card.propTypes = {
    data: PropTypes.object,
};

export default Card;