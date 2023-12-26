import React from 'react'
import { FC } from 'react'

interface RecipeDetailsPage {
  params: {
    id: string
  }
}

async function fetchData(params: {id: string}) {
  const res = await fetch (`http://localhost:3000/api/recipes/${params.id}`, { cache: 'no-store' });

  if(!res.ok) {
      throw new Error("Failed to fetch data")
  }

  return res.json();
  
}
const recipeDetailsPage: FC<RecipeDetailsPage> = async ({params}) => {
  let recipeDetailData = await fetchData(params)
  console.log(recipeDetailData)
  console.log(params.id)

  return (
    <div>
        This page is for recipeDetailPage
    </div>
  )
}

export default recipeDetailsPage