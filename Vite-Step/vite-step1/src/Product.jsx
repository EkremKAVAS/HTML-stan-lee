


function Product({productName, price}) {
   
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>

      <div>
        {/* <div>İsim : {props.productName}</div>
        <div>Fiyat :{props.price}</div> */}
        <div>isim :{productName}</div>
        <div>Fiyat :{price} TL</div>
      </div>
      
 

    </div>
  );
}

export default Product;
