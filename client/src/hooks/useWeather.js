import { useState } from "react";
import axios from "axios";

// custom hook, returns error state, loading state, server response
const useWeather = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState(null);
    
    const search = async city => {
        // show loader while waiting for reply from server
        setLoading(true)
        // hit the server
        await axios.get("/api/search", {params: {city: city}})
        .then(resp => {
            // "cod" field in response means that server returned an error
            if (resp.data.cod) {
                // set error message
                setError(resp.data.message)
            } else {
                // save response to state
                setWeather(resp.data)
                // hide error
                setError(null)
            }
            // hide loader
            setLoading(false)
        })
        .catch(err => setError(err))
    }

    return {
        error, 
        loading, 
        weather,
        search
    }
};

export default useWeather;

