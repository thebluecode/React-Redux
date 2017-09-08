import React, { PropTypes } from 'react';

const TextInput = ({name, label, value, placeholder, onChange, error}) => {
    
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass =+ ' ' + 'has-error';
    }
    
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    className="form-control"
                    type="text"
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    value={value} />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;