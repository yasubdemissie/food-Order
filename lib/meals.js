import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { error } from "node:console";

const db = sql("meals.db");

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Error in fetching meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug LIKE ?`).get(slug);
}

export async function writeMealOnDb(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);

  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

  stream.write(bufferedImage, (error) => {
    if (error) throw new Error(`Error writing the file: ${error.message}`);
    stream.end();
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
     VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(meal);
}

async function deleteMealFromDb(meal) {
  return db.prepare("DELETE FROM meals WHERE name = ?").run(meal);
}
