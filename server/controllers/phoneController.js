const { Phone } = require("../models/models");
const ApiError = require("../error/ApiError");

class PhoneController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const phone = await Phone.create({ name });
      return res.json(phone);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const phones = await Phone.findAll();
    return res.json(phones);
  }
}

module.exports = new PhoneController();
