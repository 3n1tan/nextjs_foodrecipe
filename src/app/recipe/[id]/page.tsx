import { Divider } from '@nextui-org/react';
import React, { Fragment } from 'react'
import { FC } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
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
  // console.log(params.id)
  // console.log(recipeDetailData.author)
  const date = new Date(recipeDetailData.createdAt) ;

  return (
    <Fragment>
      <div className='flex justify-center'>   
          <Card className='max-w-xl mt-9 pb-9 rounded-xl shadow-2xl'>
            <div>
              <div className='h-auto'>
                <img src={recipeDetailData.imageURL} alt="" className='rounded-t-xl'/>
              </div>
              <h1 className='text-[2.5rem] tracking-wider uppercase text-center'>{recipeDetailData.name}</h1>
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
                    <p className="text-small text-default-400">Beautiful, fast and modern React UI library.</p>
              </div>
              <Divider className="my-4" />
              <div className="flex h-[100px] items-center space-x-4 text-small">
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

            </div>
          </Card>
      </div>

    </Fragment>
  )
}

export default recipeDetailsPage