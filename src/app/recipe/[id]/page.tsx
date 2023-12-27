import { Divider } from '@nextui-org/react';
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
  console.log(params.id)
  console.log(recipeDetailData.author)

  return (
    <div>
        This page is for recipeDetailPage
        <div className='max-w-xl ml-9'>
          <div>
            <img src="" alt="" />
          </div>

          <h1 className='text-[3rem] tracking-widest'>{recipeDetailData.name}</h1>
        <div className="space-y-1">
          <h4 className="text-medium font-medium">NextUI Components</h4>
          <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
        </div>
          <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
          <div>
            <h2>Blog</h2>
            <ul>
    
            </ul>
            
          </div>
            <Divider orientation="vertical" />
          <div>Docs</div>
            <Divider orientation="vertical" />
          <div>Source</div>
        </div>

          {/* <div className='grid grid-cols-2'>
            <div>
              <h2 className='uppercase'>Ingredients</h2>
              <Divider/>
              <ol>
                <li>Hello</li>
                <li>dfdvdv</li>
                <li>dg dggv</li>
                <li>bcffcc</li>
                <li>dvdv v</li>
                <li>dfdvv</li>
                <li>v cc</li>
              </ol>
            </div>
            <div>
              <h2 className='uppercase'>Directions</h2>
              <ol>
                <li>Hello</li>
                <li>dfdvdv</li>
                <li>dg dggv</li>
                <li>bcffcc</li>
                <li>dvdv v</li>
                <li>dfdvv</li>
                <li>v cc</li>
              </ol>
            </div>
          </div> */}

        </div>
    </div>
  )
}

export default recipeDetailsPage