import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategories( [...categories, 'HunterXHunder'] );
  //   // setCategories( ['HunterXHunder', ...categories] );
  //   setCategories( cats => [...cats, 'HunterXHunder'] );
  // }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories } />
      <hr/>


      <ol>
        {
          categories.map((category, i) => (
            <GifGrid key={ category } category={category } />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
