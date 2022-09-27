const db = require("./db");

module.exports = {
  async findById(req, res) {
    let slug = req.params.slug;

    try {
      let response = await db.query(
        `SELECT * FROM products WHERE slug = ${slug}`
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },

  async findProducts(req, res) {
    try {
      let response = await db.query(
        `SELECT * FROM products WHERE pilot = TRUE`
      );
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
