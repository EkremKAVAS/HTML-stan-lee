import Cat from "./components/Cat";
//companetes cat içine gir ordan export edilmiş Cat i import et

//? Component
function App() {
  //? JS kodu
  const deneme = "REACT";

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

export default App;
