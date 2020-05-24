class Interfaz {
  
  constructor(){
    this.init()
  }
  init(){
    this.construirSelect()
  }

  construirSelect(){
    cotizador.obtenerMonedasAPI()
      .then(monedas =>{

        const select = document.querySelector('#criptomoneda')

        for(const [key,values] of Object.entries(monedas.Data)){
          const opcion = document.createElement('option')
          opcion.value = values.Symbol
          opcion.appendChild(document.createTextNode(values.CoinName))
          select.appendChild(opcion)
        }
      })
  }

  mostrarMensaje(mensaje,clases){
    const div  = document.createElement('div')
    div.className = clases
    div.appendChild(document.createTextNode(mensaje))

    const divMensaje = document.querySelector('.mensajes')
    divMensaje.appendChild(div)

    setTimeout(()=>{
      document.querySelector('.mensajes div').remove()
    },2000)
  }

  mostrarResultado(resultado,moneda,crypto){

    const datosMoneda = resultado[crypto][moneda]
    let precio = datosMoneda.PRICE.toFixed(2)
    let templateHTML = `
        <div class="card bg-warning">
          <div class="card-body text-ligth">
            <h2 class="card-title">Resultado :</h2>
            <p>El precio ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL}
              es de : ${precio}
            </p>
            <p>Variacion ultimo dia : %${datosMoneda.CHANGEPCTDAY}</p>
          </div>
        </div>  
    `
    document.querySelector('#resultado').innerHTML= templateHTML
  }
}