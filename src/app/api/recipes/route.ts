// url: http://localhost:3000/api/recipes

import prisma from '../../libs/prismadb'
import { NextResponse, NextRequest } from 'next/server'


interface IngredientInput {
    quantity: string;
    name: string;
    type: string;
  }


export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();
        const { name, author, origin, imageURL, originalURL, ingredients, steps } = body;

        const newRecipe = await prisma.recipe.create({
            data: {
                name,
                author,
                origin,
                imageURL,
                originalURL,
                ingredients: {
                    create: ingredients.map((ingredient: IngredientInput) => ({
                        quantity: ingredient.quantity,
                        name: ingredient.name,
                        type: ingredient.type,
                    })),
                },
                steps
            },
        });

        return NextResponse.json(newRecipe);
    } catch (err) {
        return NextResponse.json({ message: 'POST error', err }, { status: 500 });
    }
};

export const GET = async (request: NextRequest) => {
    try {
        const recipes = await prisma.recipe.findMany({
            include: {
                ingredients: true,
            },
        });

        return NextResponse.json(recipes);
    } catch (err) {
        return NextResponse.json({ message: 'GET error', err }, { status: 404 });
    }
};