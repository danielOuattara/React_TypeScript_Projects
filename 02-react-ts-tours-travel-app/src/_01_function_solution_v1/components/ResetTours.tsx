function ResetTours({
  fetchTours,
}: {
  fetchTours: () => Promise<void | undefined>;
}) {
  return (
    <main>
      <div className="title">
        <h2>no tour left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    </main>
  );
}

export default ResetTours;
