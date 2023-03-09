import JobType from "../types/JobType";

export type PropsJobAccessButton = {
  jobs: JobType[];
  jobIndex: number;
  updateJobIndex: Function;
};

export default function JobAccessButton(props: PropsJobAccessButton) {
  return (
    <div className="btn-container">
      {props.jobs.map((job, index) => (
        <button
          className={`job-btn ${index === props.jobIndex && "active-btn"}`}
          key={job.id}
          onClick={() => props.updateJobIndex(index)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}
