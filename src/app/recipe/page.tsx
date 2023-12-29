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
  return (
    <div className='bg-blue-100 min-h-screen'>
        <div className='mb-5 pb-10'>
            <RecipeList recipeData={recipeData} />
        </div>

        
    </div>
  )
}

export default RecipePage