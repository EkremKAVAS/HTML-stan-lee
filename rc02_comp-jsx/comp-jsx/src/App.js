//? App componenti
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

function App() {
  return (
    <>
      <h1>APP</h1>
      {/* Header comp invoke edidi parent-child mantığında işlendi */}
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
