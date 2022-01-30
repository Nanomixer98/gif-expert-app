import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); // undefined
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories((cats) => [inputValue, ...cats])
            setInputValue('');
        }
    }

    return (
        <form className='animate__animated animate__fadeIn animate__slower' onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.prototypes = {
    setCategories: PropTypes.func.isRequired
}