import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = ['Pokemon', 'Half Life', 'Halo'];

    const [categories, setCategories] = useState(['Pokemon', 'Half Life', 'Halo']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'COD']);
    //     setCategories(cats => [...cats, 'COD']);
    // }



    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                categories.map((category, i) => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>);
  }