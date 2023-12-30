import React from 'react'
import RecipeCard from './RecipeCard';
import { Spinner } from '@nextui-org/react';

interface Recipe {
  id: string;
  name: string;
  author: string;
  origin: string;
  imageURL: string;
  originalURL: string;
  steps: string[];
  ingredients: Object[]
}

interface RecipeListProps {
  recipeData: Recipe[]
}
const RecipeList = ({recipeData}: RecipeListProps) => {
  return (
    <div className=''>
      <div className='md:pt-[5rem] sm:pt-[3rem] flex flex-wrap sm:justify-center sm:gap-[5rem] pt-5 sm:flex-row flex-col space-y-10 sm:space-y-0 sm:pl-0 pl-[3.5em]'>
        {Array.isArray(recipeData) ? (
          recipeData.map(item => (
            <div key={item.id} className='hover:brightness-50 cursor-pointer'>
              <RecipeCard 
                title={item.name}
                image={item.imageURL}
                id={item.id}
                
              />
            </div>
          ))
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeList