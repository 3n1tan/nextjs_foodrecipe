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
    <div>
      <h1>Listed below are our recipe cards</h1>
      {Array.isArray(recipeData) ? (
        recipeData.map(item => (
          <div key={item.id}>
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
  )
}

export default RecipeList