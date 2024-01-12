import React from 'react'
import RecipeList from '@/components/RecipeList';

const apiURL = process.env.API_URL
async function fetchData() {
    const res = await fetch (apiURL + '/api/recipes', { cache: 'no-store' });

    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
    
}

export const dynamic = 'force-dynamic'

const RecipePage = async () => {
    let recipeData = await fetchData();
  return (
    <div className='min-h-screen max-w-full flex items-start justify-center'>
        <div className='max-w-[1760px] flex-col justify-center'>
            <h1 className='text-center pt-[2rem] sm:pt-[3rem] md:pt-[6rem] text-4xl font-extralight italic'>Our Recipe Database</h1>
            <div className='mb-5 pb-10'>
                <RecipeList recipeData={recipeData} />
            </div>       

        </div>
    </div>
  )
}

export default RecipePage