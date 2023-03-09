//  CASE 2 : One Big State : OK
//

import JobType from "../types/JobType";

export type PropsJobAccessButton = {
  jobs: JobType[];
  jobIndex: number;
  setState: Function;
};

export default function JobAccessButton(props: PropsJobAccessButton) {
  return (
    <div className="btn-container">
      {props.jobs.map((job, index) => (
        <button
          className={`job-btn ${index === props.jobIndex && "active-btn"}`}
          key={job.id}
          onClick={() =>
            props.setState((prevState: JobType[]) => ({
              ...prevState,
              jobIndex: index,
            }))
          }
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
