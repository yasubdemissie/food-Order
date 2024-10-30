"use client";

import { useRef, useState } from "react";
import styles from "./imagepicker.module.css";
import Image from "next/image";

function ImagePicker({ name, label }) {
  const ref = useRef();
  const { pickedImage, setPickedImage } = useState();

  function pickImage() {
    ref.current.click();
  }

  function handlePickedImage(event) {
    const file = event.target.files[0];

    if (!file) {
      // setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onLoad = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>pick an image to display</p>}
          {!pickedImage && (
            <Image src={pickedImage} alt="picked image by the user" fill />
          )}
        </div>
        <input
          className={styles.input}
          ref={ref}
          type="file"
          id={name}
          name={name}
          accept="image/*"
          onClick={handlePickedImage}
        />
        <button className={styles.button} type="button" onClick={pickImage}>
          Pick Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
