import { useState } from "react";
import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { Loader } from "../atom/Loader";

export const CommentForm = ({ addComment }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("username");
    const comment = formData.get("comment");
    console.log(name, comment);

    if (name.length < 4 || name.length > 20) {
      setError("Username must be between 4 and 20 characters");
      return;
    }

    if (comment.length < 10 || comment.length > 100) {
      setError("Comment must be between 10 and 100 characters");
      return;
    }
    setError(null);
    setIsLoading(true);

    addComment({ name, comment })
      .then(() => {
        e.target.reset();
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  return (
    <form
      className="flex flex-col w-full gap-4 md:px-8"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Username"
        id="username"
        type="text"
        name="username"
        placeholder="Username"
      />

      <TextField
        label="Commentaire"
        id="comment"
        type="text"
        placeholder="Commentaire"
        name="comment"
        component="textarea"
      />
      {error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : null}
      <Button type="submit">{isLoading ? <Loader /> : "Envoyer"}</Button>
    </form>
  );
};
