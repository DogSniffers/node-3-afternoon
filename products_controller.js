module.exports = {
    create:(req,res) => {
        const dbInstance = req.app.get('db')
        const {name,description,price,image_url} = req.body
        dbInstance.create_product().then(([name,description,price,image_url]) => res.status(200).send).catch(err => res.status(500).send({errorMessage:'Oops looks like something BROKE'}),console.log(errorMessage))

    },
    getOne:(req,res) =>{
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.read_product(id).then(product => res.status(200).send(product)).catch(err => res.status(500).send({errorMessage:'Oops stuff brokeeee'}), console.log(errorMessage))

    },
    getAll:(req,res) =>{
        const dbInstance = req.app.get('db')
        dbInstance.read_products().then(products => res.status(200).send(products)).catch(err => res.status(500).send({errorMessage:'Its borked Jim'}),
        console.log(err))

    },
    update:(req,res) =>{
        const dbInstance = req.app.get('db')
        const {params,query} = req;
        dbInstance.update_product([params.id,query.desc]).then(() => res.sendStatus(200)).catch(err =>res.status(500).send({errorMessage:'Borked dorked morked yorked'}),
        console.log(err))
    },
    delete:(req,res) =>{
        const dbInstance = req.app.get('db')
        const {id} = req.params;
        dbInstance.delete_product(id).then(() => res.sendStatus(200)).catch(err => res.status(500).send({errorMessage: 'Nurdursnewsnew'}), console.log(err))
        
    }
}