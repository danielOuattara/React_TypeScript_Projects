import Error from "./Error";
import LoadingFunction from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import useFetchData from "./customHooks/useFetchData";

function AppFunction() {
  const { toursState, setToursState, fetchTours } = useFetchData();

  const removeTourItem = (id: string) =>
    setToursState((prevState) => ({
      ...prevState,
      tours: prevState.tours.filter((item) => item.id !== id),
    }));

  if (toursState.isError) {
    return <Error errorMessage={toursState.errorMessage} />;
  }

  if (toursState.isLoading) {
    return <LoadingFunction />;
  }

  if (toursState.tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return <Tours tours={toursState.tours} removeTourItem={removeTourItem} />;
}

export default AppFunction;
