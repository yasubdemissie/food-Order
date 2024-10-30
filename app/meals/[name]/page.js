import { getMeal } from "@/lib/meals";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

function Name({ params }) {
  const meal = getMeal(params.name);

  if (!meal) return notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{meal.title}</h2>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </div>
  );
}

export default Name;
