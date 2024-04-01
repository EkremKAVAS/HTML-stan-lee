//? Component
function App() {
  // JS kodLARI YAZILIR
  const deneme = "REACT"

  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    //HTML kodları yazılır
    <div className="App">
      <h2 style={{ color: "red" }}>Hoşgeldin Ya Şehri React</h2>
      <p className="par">{deneme}</p>
    </div>
  )
}

export default App
