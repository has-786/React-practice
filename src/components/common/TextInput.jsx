import React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, readOnly }) => (
    <div className="form-group">
        <label htmlFor="{name}">{label}</label>
        <div className="field">
            <input type="text"
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                readOnly={readOnly} />
        </div>
    </div>
);

export default TextInput;