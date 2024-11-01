"use client";
import { useFormState } from "react-dom";
import { shareMealSumbit } from "@/lib/formActions";
import ImagePicker from "../ImagePicker";
import classes from "./page.module.css";
import FormSubmit from "@/Components/meals/FormSubmit";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMealSumbit, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name={"image"} label={"Image: "} />
          <p className={classes.actions}>
            <FormSubmit />
          </p>
          {state?.message && <p>{state.message}</p>}
        </form>
      </main>
    </>
  );
}
