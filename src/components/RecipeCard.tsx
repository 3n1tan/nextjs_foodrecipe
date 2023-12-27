import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from '@nextui-org/react'
import Link from 'next/link';

interface RecipeCardProps {
  image: string;
  title: string;
  id: string;
}
const RecipeCard = ({image, title, id}: RecipeCardProps) => {
  return (
    <div>
      <Card isFooterBlurred radius='sm' className='border-none w-[30rem]'>
        <Image 
            src={image}
            alt='continental_cuisine'
            className='rounded'
            style={{
              objectFit: "cover"
            }}
            
        />
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
          <p className='text-sm tracking-widest uppercase'>{title}</p>
          <Button className='text-tiny text-white bg-black/20' variant='flat' color='default' radius='lg' size='sm'>
            <Link href={`/recipe/${id}`}>
              See More
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RecipeCard