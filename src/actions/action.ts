"use server";

import  { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addTodo(formData: FormData) {
    const title = formData.get("title");
    try {
        await prisma.todo.create({
            data: {
                // Property(es) here have to match the schema in schema.prisma
                title: String(title),
            },
        });
        revalidatePath("/");
    }
    catch (error) {
        console.log(error);
    }
}

export async function updateTodo(formData: FormData) {
    const id = parseInt(String(formData.get("id")));
    const title = formData.get("title");
    try {
        await prisma.todo.update({
            where: {
                id
            },
            data: {
                title: String(title),
            }
        });
        revalidatePath("/");
    }
    catch (error) {
        console.log(error);
    }
}

export async function deleteTodo(formData: FormData) {
    const id = parseInt(String(formData.get("id")));
    try {
        await prisma.todo.delete({
            where: { id }
        });
        revalidatePath("/");
    }
    catch (error) {
        console.log(error);
    }
}