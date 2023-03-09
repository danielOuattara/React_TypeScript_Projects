import { FaAngleDoubleRight } from "react-icons/fa";
import JobType from "../types/JobType";

export default function JobDetails({ job }: { job: JobType }) {
  return (
    <article className="job-info">
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <p className="job-date">{job.dates}</p>
      {job.duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
}
