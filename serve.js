const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'olá mundo estou funcionando na porta 3001'
    })
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001')
})