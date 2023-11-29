const { Department } = require("../models/models");
const ApiError = require("../error/ApiError");

class DepartmentController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const department = await Department.create({ name });
      return res.json(department);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const departments = await Department.findAll();
    return res.json(departments);
  }
}

module.exports = new DepartmentController();
