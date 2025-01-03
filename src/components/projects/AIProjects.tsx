import { Button, SectionTitle } from "@/components/common";
import { ProjectCard } from "@/components/projects";

export default function AIProjects() {
  return (
    <div className="flex flex-col justify-center max-w-6xl px-3 mx-auto my-3">
      <div className="flex flex-wrap gap-6 mt-16">
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
      <div className="mx-auto">
        <Button title={"load-more"} />
      </div>
    </div>
  );
}
