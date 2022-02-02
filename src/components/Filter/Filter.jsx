import React from "react"
import PropTypes from "prop-types";

const Filter = ({value, onChange}) => {
    return (
        <label 
        > Find contacts by  name
            <input
                onChange={onChange}                
                type="text"
                value={value}
            />
        </label>
    );
}
Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
}
export default Filter;