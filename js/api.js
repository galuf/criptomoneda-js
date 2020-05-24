
class API{
  constructor(apikey){
    this.apikey= apikey
  }
  
  async obtenerMonedasAPI(){
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`
    const urlObtenerMonedas = await fetch(url)
    const monedas = await urlObtenerMonedas.json()
    return monedas
  }

  async obtenerValores(moneda,cryptomoneda){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`

    const urlConvertir = await fetch(url)
    const resultado = await urlConvertir.json()

    return resultado
  }

}