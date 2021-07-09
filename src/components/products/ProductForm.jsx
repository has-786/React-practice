import React from 'react';

import TextInput from "../common/TextInput";

const ProductForm = ({ pageText, product, onSave, onChange }) => {
    return (
        <div>
            <h1>{pageText}</h1>
            <TextInput name="id" label="Id" value={product.id} readOnly={true} />
            <TextInput name="name" label="Name" value={product.name} onChange={onChange} />
            <TextInput name="description" label="Description" value={product.description} onChange={onChange} />
            <TextInput name="status" label="Status" value={product.status} onChange={onChange} />
            <input type="submit" className="btn btn-primary" onClick={onSave} />
        </div>
    );
};

export default ProductForm;