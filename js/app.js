const cotizador = new API('ebfd302a94ac43134464304453b56f7738de6f67b2ec6cadf73a8c4ee68b5cb7')
const ui = new Interfaz()

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event)=>{
  event.preventDefault()
  console.log('click')

  const monedaSelect = document.querySelector('#moneda')
  const monedaSelecionada = monedaSelect.options[monedaSelect.selectedIndex].value
  
  const criptoMonedaSelect = document.querySelector('#criptomoneda')
  const criptoMonedaSelecionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value

  if(monedaSelecionada === '' || criptoMonedaSelecionada === ''){
    ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center')
  }else{
    cotizador.obtenerValores(monedaSelecionada,criptoMonedaSelecionada)
      .then(data=>{
        ui.mostrarResultado(data.RAW,monedaSelecionada,criptoMonedaSelecionada)
      })
  }

} )