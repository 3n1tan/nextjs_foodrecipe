// url: http://localhost:3000/api/recipes/31425

import prisma from '@/app/libs/prismadb'
import { NextResponse, NextRequest } from 'next/server'

export const GET =async (request: NextRequest, { params }: { params: {id: string}}) => {
    try {
        const { id } = params;
        const recipes = await prisma.recipe.findUnique({
            where: {
                id
            }
        });

        if(!recipes) {
            return NextResponse.json(
                {message: "Recipe not found",},
                {status: 404}
            )
        }
        return NextResponse.json(recipes)
    } catch(err) {
        return NextResponse.json({message: "GET error", err: err || "Unknown error"}, {status: 404})
    }    
}

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params;

        await prisma.$transaction([
            prisma.recipeIngredient.deleteMany({
                where: {
                    recipeId: id,
                },
            }),
            prisma.recipe.delete({
                where: {
                    id,
                },
            }),
        ]);

        return NextResponse.json({ message: 'Recipe has been deleted!!!' });
    } catch (err) {
        return NextResponse.json({ message: 'DELETE error', err: err || 'Unknown error' }, { status: 500 });
    }
};

interface IngredientInput {
    quantity: string;
    name: string;
    type: string;
  }
  

export const PATCH = async (request: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const body = await request.json();
        const { name, author, origin, imageURL, originalURL, ingredients, steps, timers } = body;

        const { id } = params;

        const updateRecipe = await prisma.recipe.findUnique({
            where: {
                id,
            },
            include: {
                ingredients: true,
            },
        });

        if (!updateRecipe) {
            return NextResponse.json(
                { message: 'Recipe not found' },
                { status: 404 }
            );
        }

        const updatedRecipe = await prisma.recipe.update({
            where: {
                id,
            },
            data: {
                name,
                author,
                origin,
                imageURL,
                originalURL,
                ingredients: {
                    create: (ingredients as IngredientInput[]).map((ingredient: IngredientInput) => ({
                        quantity: ingredient.quantity,
                        name: ingredient.name,
                        type: ingredient.type,
                    })),
                },
                steps,
                timers,
            },
            include: {
                ingredients: true,
            },
        });

        return NextResponse.json(updatedRecipe);
    } catch (err) {
        return NextResponse.json({ message: 'Update error', err }, { status: 500 });
    }
};