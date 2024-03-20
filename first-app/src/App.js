import "./App.css";

function App() {
  const students = 43000;
  const nameSurname = "Ekrem Cenkeri";
  const dogruMu = false;
  return (
    <>
    <div>
      {" "}
      <h1>ad,soyadı :{nameSurname}</h1>
      <p>ekrem</p>
      <p>{students}</p>
      {/* değişkenın değeri için süslü prantez  */}
      <input type="text"/>
      <input type="date"/>
      {dogruMu ? students : <p>false değerinini yazdı</p>}
    </div>
    </>
  );
}
//yanyana h1 p yazarsan kod patlar kapsayıcı etıket ister bunu yerıne react frag <> </> attığınızda sorun kalkacak
export default App;
//html kodlarını js ıcınde yazmaya sağlar jsx
