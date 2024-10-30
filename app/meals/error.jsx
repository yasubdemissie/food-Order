"use client";

function error({ error }) {
  return (
    <div className="error">
      <h1>An Error Occured</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default error;
