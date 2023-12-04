const { Recipient } = require("../models/models");
const ApiError = require("../error/ApiError");

class RecipientController {
  async create(req, res, next) {
    try {
      const {
        last_name,
        first_name,
        sur_name,
        position,
        department,
        state,
        phone,
      } = req.body;
      const recipient = await Recipient.create({
        last_name,
        first_name,
        sur_name,
        position,
        department,
        state,
        phone,
      });
      return res.json(recipient);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const recipients = await Recipient.findAll();
    return res.json(recipients);
  }

  // async getAll(req, res) {
  //   let { limit, page } = req.query;
  //   let recipients;
  //   page = page || 1;
  //   limit = limit || 9;
  //   let offset = page * limit - limit;
  //
  //   recipients = await Recipient.findAndCountAll({ where: limit, offset });
  //
  //   return res.json(recipients);
  // }
}

module.exports = new RecipientController();
