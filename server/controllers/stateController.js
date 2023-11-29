const { State } = require("../models/models");
const ApiError = require("../error/ApiError");

class StateController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const state = await State.create({ name });
      return res.json(state);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const states = await State.findAll();
    return res.json(states);
  }
}

module.exports = new StateController();
