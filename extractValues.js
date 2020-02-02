const fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
  if(err) return console.error(err)
  let argv = JSON.parse(data)
 
  let result = []
  if(Array.isArray(argv)) {
    console.info('Processando lista...')
    for(let stmt of argv) {
      result.push(stmt[process.argv[3]])
    }
    fs.writeFile(`${process.argv[2]}_extract.json`, JSON.stringify(result), () => {})
  } else {
    console.info('Processando objeto...')
    result.push(argv[process.argv[3]])
    fs.writeFile(`${process.argv[2]}_extract.json`, JSON.stringify(result), () => {})
  }
  console.info(`Arquivo ${process.argv[2]}_extract.json gerado`)
})