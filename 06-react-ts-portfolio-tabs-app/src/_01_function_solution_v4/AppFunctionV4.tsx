/* 
function solution version 4: local fetch + many states
----------------------------------------------------------- */

import { useState, useEffect } from "react";
import JobAccessButtonFunction from "./components/JobAccessButtonFunction";
import JobDetailsFunction from "./components/JobDetailsFunction";

const url = "https://course-api.com/react-tabs-project";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setError(res.status + " " + res.statusText);
          setIsLoading(false);
          throw new Error();
        }
        const jobsFetched = await res.json();
        setError("");
        setIsLoading(false);
        setJobs(jobsFetched);
      } catch (error) {
        return error;
      }
    };

    fetchJob();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section loading">
        <h1>{error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <h2>experiences</h2>
          <h4>function solution version 4: local fetch + many states</h4>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButtonFunction
            jobIndex={jobIndex}
            setJobIndex={setJobIndex}
            jobs={jobs}
          />
          <JobDetailsFunction job={jobs[jobIndex]} />
        </div>
      </section>
    </div>
  );
}
