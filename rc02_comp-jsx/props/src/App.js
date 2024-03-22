import Cat from "./components/cat"
//companetes cat içine gir ordan export edilmiş Cat i import et

//? Component
function App() {
  //? JS kodu
  const deneme = "REACT"

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat/>
     
    </div>
  )
}

export default App
