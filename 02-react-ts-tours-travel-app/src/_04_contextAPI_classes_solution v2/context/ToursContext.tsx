/* 1 Null initial context
------------------------------- */

import { Component, createContext } from "react";

export const ToursContext = createContext<ITourContext | null>(null);

const url = "https://course-api.com/react-tours-project";

export class ToursContextProvider extends Component<
  ITourContextProviderProps,
  ITourContextState
> {
  constructor(props: ITourContextProviderProps) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      errorMessage: "",
      tours: [],
    };
  }

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

        throw Error(`${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false,
        errorMessage: ``,
        tours: data,
      }));
    } catch (err) {
      this.setState((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
      }));
      return undefined;
    }
  };

  componentDidMount() {
    this.fetchTours();
  }

  removeTourItem = (id: string) => {
    this.setState({ tours: this.state.tours.filter((item) => item.id !== id) });
  };

  render() {
    return (
      <ToursContext.Provider
        value={{
          isLoading: this.state.isLoading,
          isError: this.state.isError,
          errorMessage: this.state.errorMessage,
          tours: this.state.tours,
          removeTourItem: this.removeTourItem,
          fetchTours: this.fetchTours,
        }}
      >
        {this.props.children}
      </ToursContext.Provider>
    );
  }
}

export default ToursContextProvider;

/* 2  Non null initial context 
No optional chaining needed  to safely access context properties
--------------------------------------------------------------- */
// import { Component, createContext } from "react";

// export const ToursContext = createContext<ITourContext>({
//   isLoading: true,
//   isError: false,
//   errorMessage: "",
//   tours: [],
//   fetchTours: async () => {},
//   removeTourItem: () => {},
// });

// const url = "https://course-api.com/react-tours-project";

// export class ToursContextProvider extends Component<
//   ITourContextProviderProps,
//   ITourContextState
// > {
//   constructor(props: ITourContextProviderProps) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       isError: false,
//       errorMessage: "",
//       tours: [],
//     };
//   }

//   fetchTours = async (): Promise<void | undefined> => {
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         this.setState((prevState) => ({
//           ...prevState,
//           isError: true,
//           isLoading: false,
//           errorMessage: `${res.status} ${res.statusText}`,
//         }));

//         throw Error(`${res.status} ${res.statusText}`);
//       }

//       const data = await res.json();
//       this.setState((prevState) => ({
//         ...prevState,
//         isLoading: false,
//         errorMessage: ``,
//         tours: data,
//       }));
//     } catch (err) {
//       this.setState((prevState) => ({
//         ...prevState,
//         isError: true,
//         isLoading: false,
//       }));
//       return undefined;
//     }
//   };

//   componentDidMount() {
//     this.fetchTours();
//   }

//   removeTourItem = (id: string) => {
//     this.setState({ tours: this.state.tours.filter((item) => item.id !== id) });
//   };

//   render() {
//     return (
//       <ToursContext.Provider
//         value={{
//           isLoading: this.state.isLoading,
//           isError: this.state.isError,
//           errorMessage: this.state.errorMessage,
//           tours: this.state.tours,
//           removeTourItem: this.removeTourItem,
//           fetchTours: this.fetchTours,
//         }}
//       >
//         {this.props.children}
//       </ToursContext.Provider>
//     );
//   }
// }

// export default ToursContextProvider;
