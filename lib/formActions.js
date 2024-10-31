"use server";

export async function shareMealSumbit(formData) {
  const meal = {
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    file: formData.get("image"),
  };

  console.log(meal);
}
