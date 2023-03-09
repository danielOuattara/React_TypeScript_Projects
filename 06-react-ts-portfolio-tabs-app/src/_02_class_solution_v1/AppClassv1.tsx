/* 
class solution version 1: local fetch + global state
----------------------------------------------------------- */

import { Component } from "react";
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

export default class AppClassV1 extends Component {
  state: FetchJobsStateType = {
    jobs: [],
    isLoading: true,
    error: "",
    jobIndex: 0,
  };

  updateJobIndex = (indexArg: number) => {
    return this.setState((prevState) => ({ ...prevState, jobIndex: indexArg }));
  };

  fetchJob = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState((prevState) => ({
          ...prevState,
          error: `${res.status} ${res.statusText}`,
          isLoading: false,
        }));
        throw new Error();
      }
      const jobsFetched = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        error: "",
        isLoading: false,
        jobs: jobsFetched,
      }));
    } catch (error) {
      return error;
    }
  };

  componentDidMount(): void {
    this.fetchJob();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <section className="section loading">
          <h1>Loading ...</h1>
        </section>
      );
    }

    if (this.state.error) {
      return (
        <section className="section loading">
          <h1>{this.state.error}</h1>
        </section>
      );
    }
    return (
      <div>
        <section className="section">
          <div className="title">
            <h2>experiences</h2>
            <h4>class solution version 1: local fetch + global state</h4>
            <div className="underline"></div>
          </div>

          <div className="jobs-center">
            <JobAccessButtonFunction
              jobIndex={this.state.jobIndex}
              updateJobIndex={this.updateJobIndex}
              jobs={this.state.jobs}
            />
            <JobDetailsFunction job={this.state.jobs[this.state.jobIndex]} />
          </div>
        </section>
      </div>
    );
  }
}
