/* 

function solution version 1: fetch with custom hook + global state
--------------------------------------------------------------------- */

import JobAccessButtonFunction from "./components/JobAccessButtonFunction";
import JobDetailsFunction from "./components/JobDetailsFunction";
import useFetchJobs from "./customHooks/useFetchJobs";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const { state, setState } = useFetchJobs(url);

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
          <h4>
            function solution version 1: fetch with custom hook + global state
          </h4>
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

export default App;
