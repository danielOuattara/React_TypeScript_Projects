// Version 2: many small states data : OK

import JobType from "../types/JobType";

export type PropsJobAccessButton = {
  jobs: JobType[];
  jobIndex: number;
  setJobIndex: Function;
};

export default function JobAccessButton(props: PropsJobAccessButton) {
  return (
    <div className="btn-container">
      {props.jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${index === props.jobIndex && "active-btn"}`}
            key={job.id}
            onClick={() => props.setJobIndex(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}
