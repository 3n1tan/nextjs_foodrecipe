import RecipeCard from '@/components/RecipeCard';
import { title } from 'process';
import React from 'react'
import RecipeList from '@/components/RecipeList';

async function fetchData() {
    const res = await fetch ("http://localhost:3000/api/recipes", { cache: 'no-store' });

    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
    
}

const RecipePage = async () => {
    let recipeData = await fetchData();
    // console.log(recipeData);

  return (
    <>
        <div className='flex flex-row'>
            <RecipeList recipeData={recipeData} />
        </div>

        
    </>
  )
}

export default RecipePage