"use server";

import { redirect } from "next/navigation";
import { writeMealOnDb } from "./meals";

function isInvalidInput(text) {
  return !text || text.trim() === "";
}

export async function shareMealSumbit(_, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  if (
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instructions) ||
    isInvalidInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  )
    return { message: "Invalid input" };

  await writeMealOnDb(meal);
  redirect("/meals");
}
