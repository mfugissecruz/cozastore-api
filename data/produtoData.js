const db = require('./db');


module.exports = {
    async findById(req, res){
        let id = req.params.id;

        try {
                let response = await db.query(`SELECT * FROM products WHERE id = ${id}`);
                res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    }
}
