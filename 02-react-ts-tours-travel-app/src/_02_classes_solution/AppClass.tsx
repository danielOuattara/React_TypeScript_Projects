import { Component } from "react";
import ErrorMessage from "./components/ErrorMessage";
import LoadingClass from "./components/LoadingClass";
import ResetTours from "./components/ResetTours";
import ToursClass from "./components/ToursClass";

const url = "https://course-api.com/react-tours-project";

export default class AppClass extends Component {
  state: IGlobalFetchState = {
    isLoading: true,
    isError: false,
    errorMessage: "",
    tours: [],
  };

  //--------
  fetchTours = async (): Promise<void | undefined> => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        this.setState((prevState) => ({
          ...prevState,
          isError: true,
          isLoading: false,
          errorMessage: `${res.status} ${res.statusText}`,
        }));
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        tours: data,
        isLoading: false,
        errorMessage: "",
      }));
    } catch (err) {
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isError: true,
      }));
      return undefined;
    }
  };

  //--------
  componentDidMount() {
    this.fetchTours();
  }

  //--------
  removeTourItem = (id: string) => {
    this.setState((prevState: IGlobalFetchState) => ({
      ...prevState,
      tours: prevState.tours.filter((item) => item.id !== id),
    }));
  };

  //--------
  render() {
    if (this.state.isError) {
      return <ErrorMessage errorMessage={this.state.errorMessage} />;
    }

    if (this.state.isLoading) {
      return <LoadingClass />;
    }

    if (this.state.tours.length === 0) {
      return <ResetTours fetchTours={this.fetchTours} />;
    }

    return (
      <ToursClass
        tours={this.state.tours}
        removeTourItem={this.removeTourItem}
      />
    );
  }
}

//--------
