//!COMPANENTLER

import { Name } from "../nameComp/Name";
//named exportun yazım seklı süslü içinde Aynı isimle kullanılır

const Cat = () => {
  return (
    //*mutlaka kapsayıcı parent elemente sahıp olmalı
    <div>
        <Name/>
      <img
        src="https://pixabay.com/tr/photos/kedi-kedi-yavrusu-a%C4%9Fa%C3%A7-merakl%C4%B1-1647775/"
        alt="" height="300px"  widht ="250px"
      />
      <p>Color:</p>
      <hr />
    </div>
  );
};

export default Cat; //export yaparak kapıyı açtık ıstedıgımız yerde kullanabılırız
