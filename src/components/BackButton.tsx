'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const router = useRouter();

  return (
    <div>
        <Button onClick={() => router.push('/recipe')} color='warning' variant='flat' className='text-red-600'>
            Back To Recipe List
        </Button>
    </div>
  )
}

export default BackButton