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
  return (
    <div className='min-h-screen'>
        <h1 className='text-center pt-[2rem] sm:pt-[3rem] md:pt-[6rem] text-4xl font-extralight italic'>Our Recipe Database</h1>
        <div className='mb-5 pb-10'>
            <RecipeList recipeData={recipeData} />
        </div>       
    </div>
  )
}

export default RecipePage