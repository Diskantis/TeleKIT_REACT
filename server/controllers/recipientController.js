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
        departmentId,
        stateId,
        phoneId,
      } = req.body;
      const recipient = await Recipient.create({
        last_name,
        first_name,
        sur_name,
        position,
        departmentId,
        stateId,
        phoneId,
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
}

module.exports = new RecipientController();
