exports.post = (req, res, next) => {
  res.status(201).send('Rota POST!')
}

exports.put = (req, res, next) => {
  let id = req.params.id
  res.status(201).send(`Rota PUT com ID! --> ${id}`)
}

exports.delete = (req, res, next) => {
  let id = req.params.id
  res.status(200).send(`Rota DELETE com ID! --> ${id}`)
}

exports.get = (req, res, next) => {
  res.status(200).send('Rota GET!')
}

exports.getById = (req, res, next) => {
  let id = req.params.id
  res.status(200).send(`Rota GET com ID! ${id}`)
}

const usuarioLogado = false

exports.use = (req, res, next) => {
  if (!usuarioLogado) {
    res.redirect('/')
  }
  next() //middleware
}

exports.use = (req, res, next) => {
  res.status(404).send('Sorry cant find that!')
}

exports.use = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}
