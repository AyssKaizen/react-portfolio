import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Typography } from "./atom/Typography";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 p-4 md:p-8 ">
      <Typography variant="h2">Contactez-moi !</Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          Je serai ravis de discuter avec vous d'une potentielle collaboration
          ou mission free-lance.
        </Typography>
        <a
          className="text-base underline text-primary"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
      <p>
        Created with ❤️ by WebStudZ{" "}
        {/*<a href="https://codelynx.dev/beginreact">BeginReact.dev formation</a> !*/}
      </p>
    </footer>
  );
};
