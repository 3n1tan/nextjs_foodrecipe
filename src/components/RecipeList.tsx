import React from 'react'
import RecipeCard from './RecipeCard';
import { Spinner } from '@nextui-org/react';
import { PageWrapper } from '@/app/page-wrapper';
import { MotionDiv } from '@/app/use-client';
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

const variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}
const RecipeList = ({recipeData}: RecipeListProps) => {
  return (
    <div className='w-full'>
      <PageWrapper>
        <MotionDiv
        variants={variants}
        initial="hidden"
        animate="show"
        >
          <div className='max-w-[1760px] justify-center md:pt-[5rem] sm:pt-[3rem] flex flex-wrap sm:justify-center sm:gap-[5rem] pt-5 sm:flex-row flex-col space-y-10 sm:space-y-0 sm:pl-0 pl-[3.5em]'>
            {Array.isArray(recipeData) ? (
              recipeData.map(item => (
                <MotionDiv
                variants={images}
                key={item.id} className='hover:brightness-50 cursor-pointer'>
                  <RecipeCard 
                    title={item.name}
                    image={item.imageURL}
                    id={item.id}
                    
                  />
                </MotionDiv>
              ))
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </div>

        </MotionDiv>
      </PageWrapper>
    </div>
  )
}

export default RecipeList