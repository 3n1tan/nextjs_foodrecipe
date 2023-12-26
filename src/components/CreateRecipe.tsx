'use client'
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

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
    const {register, handleSubmit, setValue, getValues} = useForm();

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


    // const onSubmit = (data: FieldValues) => console.log(data)
    const onSubmit = (data: FieldValues) => {
        const formData = {...data, steps: getValues('steps'), ingredients: getValues('ingredients')};
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
                   {/* Button to add a new step */}
                   <Button onClick={handleAddStep}>Add Step</Button>
                    {steps.map((step, index) => (
                        <div key={index} className='flex'>
                            <Input
                                {...register(`steps[${index}]`)}
                                isRequired
                                type="text"
                                label={`Step ${index + 1}`}
                                defaultValue={step}
                                className="max-w-xs my-6"
                                onChange={(e) => handleStepChange({index})}
                            />
                            <Button onClick={()=>handleDeleteStep({index})}>Delete Step</Button>
                        </div>
                    ))} 
                </div>
                <div>
                    <Button onClick={handleAddIngredient}>Add Ingredient</Button>
                    {Array.isArray(ingredients) && (
                        ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <label htmlFor={`ingredients[${index}].quantity`} id='quantity'>Quantity</label>
                                <Input 
                                    {...register(`ingredients[${index}].quantity`)}
                                    isRequired
                                    type='text'
                                    label={`Quantity ${index + 1}`}
                                    defaultValue={ingredient.quantity}
                                    onChange={(e) => handleIngredientChange({index})}
                                />
                                <label htmlFor={`ingredients[${index}].name`} id='name'>Name</label>
                                <Input 
                                    {...register(`ingredients[${index}].name`)}
                                    isRequired
                                    type='text'
                                    label={`Name ${index + 1}`}
                                    defaultValue={ingredient.name}
                                    onChange={(e) => handleIngredientChange({index})}
                                />
                                <label htmlFor={`ingredients[${index}].type`} id='type'>Type</label>
                                <Input 
                                    {...register(`ingredients[${index}].type`)}
                                    isRequired
                                    type='text'
                                    label={`Type ${index + 1}`}
                                    defaultValue={ingredient.type}
                                    onChange={(e) => handleIngredientChange({index})}
                                />
                                <Button onClick={() => handleRemoveIngredient({index})}>Remove Ingredient</Button>
                            </div>
                        ))
                    )}
                </div>
                <Button type='submit'>Submit</Button>
            </div>
        </form>

    </div>
  )
}

export default CreateRecipe