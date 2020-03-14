// const dummyArray = [];
//    let id = 0;


module.exports = {

   getInventory: (req, res) => {
       const db = req.app.get('db');

       db.get_inventory()
       .then(product => res.status(200).send(product))
       .catch(err => res.status(500).send(err))
   },

   createProduct: (req, res) => {
       const db = req.app.get('db');
       const {product_name, product_price, img} = req.body;
        console.log(req.body)
       db.create_product([product_name, product_price, img])
       .then(() => res.sendStatus(200))
       .catch(err => res.status(500).send(err))
   }
}