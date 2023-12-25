'use client'
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

interface StepsProps {
    index: number;
}

const CreateRecipe = () => {
    const {register, handleSubmit, setValue, getValues} = useForm();

    const [steps, setSteps] = useState<string[]>([""]); // State to store steps

    const handleAddStep = () => {
      setSteps([...steps, ""]); // Add an empty step to the state
    };
  
    const handleStepChange = ({index}: StepsProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSteps = [...steps];
      newSteps[index] = e.target.value;
      setSteps(newSteps);
    };

    // const onSubmit = (data: FieldValues) => console.log(data)
    const onSubmit = (data: FieldValues) => {
        const formData = {...data, steps: getValues('steps')};
        console.log(formData)
    }


  return (
    <div>      
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
                <Input 
                    {...register('name')}
                    isRequired
                    type="text"
                    label="Recipe Name"
                    defaultValue=""
                    className="max-w-xs my-6"
                />
                <Input 
                    isRequired
                    type="text"
                    label="Recipe Author"
                    defaultValue=""
                    className="max-w-xs my-6"
                    {...register('author')}
                />
                <Input 
                    isRequired
                    type="text"
                    label="Origin"
                    defaultValue=""
                    className="max-w-xs my-6"
                    {...register('origin')}
                />
                <Input 
                    isRequired
                    type="text"
                    label="Image Link"
                    defaultValue=""
                    className="max-w-xs my-6"
                    {...register('imageURL')}
                />
                <div>
                   {/* Render existing steps */}
                    {steps.map((step, index) => (
                        <div key={index}>
                        <Input
                            {...register(`steps[${index}]`)}
                            isRequired
                            type="text"
                            label={`Step ${index + 1}`}
                            defaultValue={step}
                            className="max-w-xs my-6"
                            onChange={(e) => handleStepChange({index})}
                        />
                        </div>
                    ))} 
                    {/* Button to add a new step */}
                    <Button onClick={handleAddStep}>Add Step</Button>
                </div>
                <Button type='submit'>Submit</Button>
            </div>
        </form>

    </div>
  )
}

export default CreateRecipe