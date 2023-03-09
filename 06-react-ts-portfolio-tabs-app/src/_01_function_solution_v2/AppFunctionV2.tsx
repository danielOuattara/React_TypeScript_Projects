/* 
function solution version 2: fetch with custom hook + many states
------------------------------------------------------------------- */

import JobAccessButtonFunction from "./components/JobAccessButtonFunction";
import JobDetailsFunction from "./components/JobDetailsFunction";
import useFetchJobs from "./customHooks/useFetchJobs";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const { jobs, jobIndex, setJobIndex, isLoading, error } = useFetchJobs(url);

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
          <h4>
            function solution version 2: fetch with custom hook + many states
          </h4>
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

export default App;
