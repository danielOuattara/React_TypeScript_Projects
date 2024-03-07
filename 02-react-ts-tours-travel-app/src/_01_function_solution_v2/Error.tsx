function Error({ errorMessage }: { errorMessage: string }) {
  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}

export default Error;
