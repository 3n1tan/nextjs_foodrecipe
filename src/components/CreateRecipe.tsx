'use client'
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
interface StepsProps {
    index: number;
}
interface DeleteStepsProps {
    index: number;
}

interface IngredientsProps {
    index: number
}

const CreateRecipe = () => {

    const router = useRouter();

    const {register, handleSubmit, setValue, getValues, reset} = useForm();

    const [steps, setSteps] = useState<string[]>([""]); // State to store steps

    const [ingredients, setIngredients] = useState<Array<{ quantity: string; name: string; type: string }>>([{ quantity: '', name: '', type: '' }]);
    

    const handleAddStep = () => {
      setSteps([...steps, ""]); // Add an empty step to the state
    };

    const handleStepChange = ({index}: StepsProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSteps = [...steps];
      newSteps[index] = e.target.value;
      setSteps(newSteps);
    };

    const handleDeleteStep = ({index}: DeleteStepsProps) => {
        const deleteSteps = [...steps]
        deleteSteps.splice(index, 1)
        setSteps(deleteSteps)
    }

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { quantity: '', name: '', type: '' }])
      };
  
    const handleIngredientChange = ({index}: IngredientsProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newIngredients = [...ingredients];
        const name = e.target.name as keyof typeof newIngredients[number]; 
        newIngredients[index][name] = e.target.value;
        setIngredients(newIngredients);
    };

    const handleRemoveIngredient = ({index}: IngredientsProps) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
      };


    const onSubmit = (data: FieldValues) => {
        const formData = {...data, steps: getValues('steps'), ingredients: getValues('ingredients')};
        axios.post('http://localhost:3000/api/recipes', formData).then(res => {
            alert("Recipe successfully submitted");
            router.push('/recipe')
        }).catch(err => {
            console.log(err)
        });
        reset();
        // router.refresh();
    }


  return (
    <div className='w-full flex items-center justify-center rounded-xl shadow-inherit '>      
        <form onSubmit={handleSubmit(onSubmit)} className='mb-8 mt-5 p-6 w-[75%] grid gap-6 border-solid border-2 rounded-xl shadow-2xl shadow-sky-300'>
            <div className='grid grid-cols-2 gap-6'>
                <div className=''>
                    <Input 
                        {...register('name')}
                        isRequired
                        type="text"
                        label="Recipe Name"
                        defaultValue=""
                        className="max-w-xs w-full"
                        labelPlacement='outside'
                        size='sm'
                    />
                    <Input 
                        isRequired
                        type="text"
                        label="Recipe Author"
                        defaultValue=""
                        className="max-w-xs"
                        {...register('author')}
                        labelPlacement='outside'
                        size='sm'
                    />
                    <Input 
                        isRequired
                        type="text"
                        label="Origin"
                        defaultValue=""
                        className="max-w-xs"
                        {...register('origin')}
                        labelPlacement='outside'
                        size='sm'
                    />
                    <Input 
                        isRequired
                        type="text"
                        label="Image Link"
                        defaultValue=""
                        className="max-w-xs"
                        {...register('imageURL')}
                        labelPlacement='outside'
                        size='sm'
                    />
                </div>

                <div className=''>
                    <div>
                    {/* Render existing steps */}
                    {/* Button to add a new step */}
                        {steps.map((step, index) => (
                            <div key={index} className='flex'>
                                <Input
                                    {...register(`steps[${index}]`)}
                                    isRequired
                                    type="text"
                                    label={`Step ${index + 1}`}
                                    defaultValue={step}
                                    className="max-w-xs mt-2"
                                    onChange={(e) => handleStepChange({index})}
                                    size='sm'
                                />
                                <div className='self-center ml-5'>
                                    <Button onClick={()=>handleDeleteStep({index})} color='danger'>Delete Step</Button>
                                </div>
                            </div>
                        ))} 
                        <Button onClick={handleAddStep} color='primary' className='mt-8'>Add Step</Button>
                    </div>
                    <div>
                        {Array.isArray(ingredients) && (
                            ingredients.map((ingredient, index) => (
                                <div key={index} className='flex'>
                                    <div className='mt-8'>
                                        <Input 
                                            {...register(`ingredients[${index}].quantity`)}
                                            isRequired
                                            type='text'
                                            label={`Quantity ${index + 1}`}
                                            defaultValue={ingredient.quantity}
                                            onChange={(e) => handleIngredientChange({index})}
                                            size='sm'
                                            className='mt-2'
                                        />
                                    
                                        <Input 
                                            {...register(`ingredients[${index}].name`)}
                                            isRequired
                                            type='text'
                                            label={`Name ${index + 1}`}
                                            defaultValue={ingredient.name}
                                            onChange={(e) => handleIngredientChange({index})}
                                            size='sm'
                                            className='mt-2'
                                        />
                
                                        <Input 
                                            {...register(`ingredients[${index}].type`)}
                                            isRequired
                                            type='text'
                                            label={`Type ${index + 1}`}
                                            defaultValue={ingredient.type}
                                            onChange={(e) => handleIngredientChange({index})}
                                            size='sm'
                                            className='mt-2'
                                        />
                                    </div>
                                    <div className='self-center ml-5'>
                                        <Button onClick={() => handleRemoveIngredient({index})} color='danger'>Remove Ingredient</Button>
                                    </div>
                                </div>
                            ))
                            )}
                    </div>
                            <Button onClick={handleAddIngredient} color='primary' className='mt-8'>Add Ingredient</Button>
                </div>
                    <Button type='submit' className='mt-5 col-span-2' color='success'>Submit</Button>
            </div>
        </form>

    </div>
  )
}

export default CreateRecipe