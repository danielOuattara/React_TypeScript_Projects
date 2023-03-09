/* 
function solution version 3: local fetch + global state
----------------------------------------------------------- */

import { useState, useEffect } from "react";
import JobAccessButtonFunction from "./components/JobAccessButtonFunction";
import JobDetailsFunction from "./components/JobDetailsFunction";

import JobType from "./types/JobType";

export type FetchJobsStateType = {
  jobs: JobType[];
  isLoading: boolean;
  error: string;
  jobIndex: number;
};

const url = "https://course-api.com/react-tabs-project";

export default function App() {
  const [state, setState] = useState<FetchJobsStateType>({
    jobs: [],
    isLoading: true,
    error: "",
    jobIndex: 0,
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setState((prevState) => ({
            ...prevState,
            error: `${res.status} ${res.statusText}`,
            isLoading: false,
          }));
          throw new Error();
        }
        const jobsFetched = await res.json();
        setState((prevState) => ({
          ...prevState,
          error: "",
          isLoading: false,
          jobs: jobsFetched,
        }));
      } catch (error) {
        return error;
      }
    };

    fetchJob();
  }, []);

  if (state.isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  if (state.error) {
    return (
      <section className="section loading">
        <h1>{state.error}</h1>
      </section>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="title">
          <h2>experiences</h2>
          <h4>function solution version 3: local fetch + global state</h4>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <JobAccessButtonFunction
            jobIndex={state.jobIndex}
            setState={setState}
            jobs={state.jobs}
          />
          <JobDetailsFunction job={state.jobs[state.jobIndex]} />
        </div>
      </section>
    </div>
  );
}
