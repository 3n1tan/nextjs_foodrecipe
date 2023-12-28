import { Button, Divider } from '@nextui-org/react';
import React, { Fragment } from 'react'
import { FC } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import BackButton from '@/components/BackButton';

interface RecipeDetailsPage {
  params: {
    id: string
  }
}

interface Ingredient {
  id: string;
  quantity: string;
  name: string;
  type: string;
  recipeId: string;
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
  // console.log(params.id)
  // console.log(recipeDetailData.author)
  const date = new Date(recipeDetailData.createdAt) ;

  return (
    <Fragment>
      <div className='flex justify-center'>   
          <Card className='max-w-2xl mt-9 pb-9 rounded-xl shadow-2xl'>
              <CardHeader className='p-0'>
                <img 
                  src={recipeDetailData.imageURL} 
                  alt="" 
                  className='rounded-t-xl h-[20rem] w-[60rem] px-'
                  style={{
                    objectFit: "cover"
                  }}
                />
              </CardHeader>
              <CardBody>
                <h1 className='text-[2.5rem] tracking-wider uppercase text-center font-light'>{recipeDetailData.name}</h1>
                <div className="space-y-1 pl-5">
                  <div className='flex items-center space-x-4 h-5'>
                    <div>
                      <h4 className="font-medium text-small text-default-400">Origin: {recipeDetailData.origin}</h4>
                    </div>
                    <Divider orientation='vertical'/>
                    <div>
                      <h4 className="font-medium text-small text-default-400">Author: {recipeDetailData.author}</h4>
                    </div>
                    <Divider orientation='vertical'/>
                    <div>
                      <h4 className="font-medium text-small text-default-400">Date Added: {date.toDateString()}</h4>
                    </div>
                  </div>
                </div>
                <Divider className="my-4" />
                <div className="grid grid-cols-4">
                  <div className='ml-6'>
                    <p className='uppercase mb-5 text-lg tracking-wider italic text-red-500'>Ingredients</p>
                    <ul>
                      {recipeDetailData.ingredients.map((ingredient: Ingredient ) => (
                        <li key={ingredient.id} className='mb-2 list-disc'>
                          {ingredient.quantity} {ingredient.name} ({`${ingredient.type}`})
                        </li>
                      ))}
                    </ul>             
                  </div>
                    <Divider orientation='vertical' className='grid-flow-col ml-9' />
                  <div className='col-span-2 ml-[-5em]'>
                    <p className='uppercase mb-5 text-lg tracking-wider italic text-red-500'>Steps</p>
                    <ul>
                      {recipeDetailData.steps.map((step: string, index: number) => (
                        <li key={index} className='mb-5 list-disc'>
                          {step}
                        </li>
                      ))}
                    </ul>             
                  </div>                 
                </div>
              </CardBody>
            <CardFooter className='flex justify-center'>
              <BackButton />
            </CardFooter>
          </Card>
      </div>

    </Fragment>
  )
}

export default recipeDetailsPage