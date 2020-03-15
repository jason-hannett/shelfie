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
   },

   deleteProduct: (req, res) => {
       const db = req.app.get('db')
       const {id} = req.params
        console.log(req.params)
       db.delete_product(id)
       .then(() => res.sendStatus(200))
       .catch(err => res.status(500).send(err))
   },

   editProduct: (req, res) => {
       const db = req.app.get('db')
       const {id} = req.params 
       const {product_name, product_price, img} = req.body
       db.edit_product(id, product_name, product_price, img)
       .then(updatedProduct => res.status(200).send(updatedProduct))
       .catch(err => res.status(500).send(err))
   }

}