import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/Components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

async function page() {

  const meals = getMeals();

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals created by you are{" "}
          <span className={styles.highlight}>the Best thing</span>
        </h1>
        <p>
          {" "}
          You can enjoy in this webiste by orderging anything you want to eat,
          with little cost
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Meal</Link>
        </p>
      </header>
      <main className={styles.main}><MealsGrid meals={meals} /></main>
    </>
  );
}

export default page;
