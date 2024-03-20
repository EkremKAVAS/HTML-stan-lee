import "./App.css";

//!JSX
function App() {
  const students = 43000;
  const nameSurname = "Ekrem Cenkeri";
  const dogruMu = false;
  const url ="https://picsum.photos/250/250"
  return (
    <>
    <div>
      {" "}
      <h1>ad,soyadı :{nameSurname}</h1>
      <p>ekrem</p>
      <p>{students}</p>
      {/* değişkenın değeri için süslü parantez  */}
      <input type="text"/>
      <input type="date"/>
      {dogruMu ? students : <p>false değerinini yazdı</p>}
    </div>
    <img src = "https://picsum.photos/240/250" alt = "" />
    <img src = {url} alt = "" />
    <div style = {{
      width :"250px",
      height: "250px",
      backgroundColor : "blue"
// eğer inlie css yazcaksan ıkı defa süslü içinde olması lazım style ıcındekı obje dıye düşün birde -olmadığı için camelCase yapısıyla yazılır
    }}>
    </div>
    </>
  );
}
//yanyana h1 p yazarsan kod patlar kapsayıcı etıket ister bunu yerıne react frag <> </> attığınızda sorun kalkacak
export default App;
//html kodlarını js ıcınde yazmaya sağlar jsx
