import { useToursContext } from "./../context/ToursContext";

export default function Error() {
  const context = useToursContext();
  const errorMessage = context?.errorMessage || "";
  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}
