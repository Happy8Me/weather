import React, {useState} from "react";
import PropTypes from 'prop-types';

const Form = ({submitForm}) => {

    const [city, setCity] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if(!city || city === '') return;
        submitForm(city);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                className="form-input" 
                type="text" 
                aria-label="city"
                required
                placeholder="city"
                onChange={e => setCity(e.target.value)}
            />
            <button 
                className="form-button"
                onClick={handleSubmit}
            >
                show weather
            </button>
        </form>
    )
}

Form.propTypes = {
    submitForm: PropTypes.func.isRequired,
}

export default Form;