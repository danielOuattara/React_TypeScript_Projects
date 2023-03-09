import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage";
import LoadingFunction from "./components/LoadingFunction";
import ResetTours from "./components/ResetTours";
import Tours from "./components/ToursFunction";
//
import TourType from "./types/TourType";

const url = "https://course-api.com/react-tours-project";

function AppFunction() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tours, setTours] = useState<TourType[]>([]);

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        setLoading(false);
        setErrorMessage(`${res.status} ${res.statusText}`);
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setTours(data);
      setLoading(false);
      setErrorMessage("");
    } catch (err) {
      setLoading(false);
      setIsError(true);
      return err;
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTourItem = (id: string) =>
    setTours((tours) => {
      return tours.filter((item: TourType) => item.id !== id);
    });

  if (isError) {
    return <ErrorMessage errorMessage={errorMessage} />;
  }

  if (loading) {
    return <LoadingFunction />;
  }

  if (tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return <Tours tours={tours} removeTourItem={removeTourItem} />;
}

export default AppFunction;
