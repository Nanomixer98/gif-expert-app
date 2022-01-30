import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Pokemon', 'Half Life', 'Halo'];

    const [categories, setCategories] = useState(['Halo']);

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
                categories.map((category) => ( 
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>
    </>);
  }