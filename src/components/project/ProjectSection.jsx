import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";
import { GITHUB_USERNAME } from "../../lib/config";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { useFetch } from "../../hooks/useFetch";

export const ProjectSection = () => {
  const { data: projects, isResolved } = useFetch(
    getListOfUrlRepositoriesUrl(GITHUB_USERNAME)
  );

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {/* GitHub Repository - Exercise (replace this) */}
        {isResolved
          ? projects.map((project) => (
              <Project key={project.name} {...project} />
            ))
          : null}
      </div>
    </SectionWrapper>
  );
};
