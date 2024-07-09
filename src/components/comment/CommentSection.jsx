import { SectionWrapper } from "../atom/SectionWrapper";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { commentsUrl } from "../../lib/api-url";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../atom/Loader";
import { Typography } from "../atom/Typography";

export const CommentSection = () => {
  // Commentaires - Exercise
  const {
    run,
    isLoading,
    isRejected,
    isResolved,
    data: comments,
  } = useFetch(commentsUrl);

  const addComment = (comment) => {
    return fetch(commentsUrl, {
      method: "POST",
      body: JSON.stringify({
        username: comment.name,
        comment: comment.comment,
      }),
    }).then(async (res) => {
      const json = await res.json();
      if (res.ok) {
        run();
        return json;
      } else {
        return Promise.reject(json.error);
      }
    });
  };

  return (
    <SectionWrapper title="Et si tu laissais un petit commentaire ?">
      <div className="flex flex-col items-center w-full max-w-2xl gap-8 m-auto ">
        <div className="grid justify-center w-full gap-4 grid-cols-auto-fill-200-300">
          {isLoading && <Loader />}
          {isRejected && (
            <Typography>
              une erreur est survenue lors du chargement des messages
            </Typography>
          )}
          {isResolved
            ? comments.map((com) => <Comment key={com.id} {...com} />)
            : null}
        </div>
        <CommentForm addComment={addComment} />
      </div>
    </SectionWrapper>
  );
};
