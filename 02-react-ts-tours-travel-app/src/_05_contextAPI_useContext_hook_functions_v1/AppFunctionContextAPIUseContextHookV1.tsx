import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

export default function AppFunctionContextAPIUseContextHookV1() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}
