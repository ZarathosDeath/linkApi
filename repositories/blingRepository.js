const Parser = require('xml2js')
const token = '5f629e077fbb441d518c6a4f8f6e724679134235ec9e9c255c65551fa6f1d3c836062167'
const axios = require('axios')

exports.blingRepository = () => ({
  async add (orders) {
    const xmlData = await xmlParser(orders)
    await axios.post(
      `https://bling.com.br/Api/v2/pedidocompra/json/?apikey=${token}&xml=${xmlData}`,
      null,
      { headers: {
      'Content-Type': 'application/json'
      }
    })
  }
})

const xmlParser = async (deals) => {
  const builder = new Parser.Builder()
  const xmlData = []

  return new Promise (async resolve => {
    for await (const deal of deals) {
      const { title, value, date } = deal
      const mapToXml = {
        pedidocompra: {
          datacompra: date,
          fornecedor: {
            nome: title,
          },
          itens: {
            item: [
              {
                codigo: 123456,
                descricao: 'descricao qualquer',
                qtde: 1,
                valor: value
              }
            ]
          },
          parcelas: {
            parcela: [
              {
                nrodias: 1,
                valor: value
              }
            ]
          }
        }
      }
      const parsedData = builder.buildObject(mapToXml)
      xmlData.push(encodeURI(parsedData))
    }
    resolve(xmlData)
  })
}