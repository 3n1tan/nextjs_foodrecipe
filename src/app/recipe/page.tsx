import RecipeCard from '@/components/RecipeCard';
import { title } from 'process';
import React from 'react'
import RecipeList from '@/components/RecipeList';

async function fetchData() {
    const res = await fetch ("http://localhost:3000/api/recipes");

    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
    
}

const RecipePage = async () => {
    let recipeData = await fetchData();
    console.log(recipeData);

  return (
    <>
        <div className='flex flex-row'>
            {/* <p>Recipe list will be displayed here</p>
            {Array.isArray(recipeitems) ? (
            recipeitems.map(item => (
            // Render your components based on the data
            <div key={item.id}>
                <RecipeCard 
                    title={item.name}
                    image={item.imageURL}        
                />
            </div>
            ))
        ) : (
            <p>No data available</p>
        )}    */}

            <RecipeList recipeData={recipeData} />
        </div>

        
    </>
  )
}

export default RecipePage