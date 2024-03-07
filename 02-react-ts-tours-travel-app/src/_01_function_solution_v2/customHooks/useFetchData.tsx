import { useState, useEffect, useCallback } from "react";

const url = "https://course-api.com/react-tours-project";

export default function useFetchData() {
  const [toursState, setToursState] = useState<IFetchState>({
    isLoading: true,
    isError: false,
    errorMessage: "",
    tours: [],
  });

  const fetchTours = useCallback(async (): Promise<void | undefined> => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setToursState((prevState) => ({
          ...prevState,
          isError: true,
          isLoading: false,
          errorMessage: `${res.status} ${res.statusText}`,
        }));
        throw Error(`${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setToursState((prevState) => ({
        ...prevState,
        isLoading: false,
        errorMessage: ``,
        tours: data,
      }));
    } catch (err) {
      if (err instanceof Error) {
        setToursState((prevState) => ({
          ...prevState,
          isLoading: false,
          isError: true,
        }));
        return undefined;
      }
    }
  }, []);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return { toursState, setToursState, fetchTours };
}
