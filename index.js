
/*
fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
  .then((res) => {

    return res.json()
  })
  .then((data) => {
    console.log(data)

  crearTarjetaSerie(data)

    
  }) 

*/
  

  const endpointMakeUp = "http://makeup-api.herokuapp.com/api/v1/products.json";
  const tarjeta = document.querySelector(".container");

  

  const crearTarjeta = (array) => {
    const html = array.reduce((acc, curr) => {
      return acc + `
      <div class="tarjeta">
      <div class="images">
              <img src="${curr.image_link}" />
            </div>
       <h1 class="product-title">${curr.name}</h2>
        <p class="price">${curr.price}</p>
       <p class="description">${curr.description}</p>
       </div>
       `
    }, "")
    tarjeta.innerHTML = html
  }
  
  const pedirInfo = () =>{
    fetch(endpointMakeUp)
    .then((res)=> res.json())
    .then((data) =>{
        crearTarjeta(data);
    })
  
}
pedirInfo();