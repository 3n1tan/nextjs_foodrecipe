import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link';

interface RecipeCardProps {
  image: string;
  title: string;
}
const RecipeCard = ({image, title}: RecipeCardProps) => {
  return (
    <div>
      <Card isFooterBlurred radius='sm' className='border-none w-[250px]'>
        <img 
            src={image}
            alt='continental_cuisine'
            height={200}
            width={250}
            className=''
        />
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-sm text-white'>{title}</p>
          <Button className='text-tiny text-white bg-black/20' variant='flat' color='default' radius='lg' size='sm'>
            <Link href="/recipe/id">
              See More
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RecipeCard