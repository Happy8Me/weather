import PropTypes from 'prop-types';

const Error = ({error}) => {
    return (
        <div className="error">
            <p>{error}</p>
        </div>
    )
}

Error.propTypes = {
    error: PropTypes.string,
};

Error.defaultProp = {
    error: "Oops! smth went wrong",
};


export default Error;