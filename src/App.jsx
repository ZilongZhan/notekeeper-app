function App() {
  console.log({ meta: import.meta.env.VITE_API_BASE_URL });
  return (
    <>
      <h1>{import.meta.env.VITE_API_BASE_URL}</h1>
    </>
  );
}

export default App;
