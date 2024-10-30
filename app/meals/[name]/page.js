import { getMeal } from "@/lib/meals";
import Image from "next/image";
import styles from './page.module.css';

function Name({ params }) {
  const meal = getMeal(params.name);

  return (
    <div>
      <header>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{meal.title}</h2>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
        </div>
      </header>
      <main>

      </main>
    </div>
  );
}

export default Name;
