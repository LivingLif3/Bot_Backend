const AccountService = require('../services/account-service');

class AccountController {
  async createAccount(req, res, next) {
    try {
      const { login } = req.body;
      const answer = await AccountService.createAccount(login);
      res.json(answer);
    } catch (e) {
      next(e);
    }
  }
  async setSubscribers(req, res, next) {
    try {
      const { login, subscribers } = req.body;
      const answer = await AccountService.setSubscribers(login, subscribers);
      res.json(answer);
    } catch (e) {
      next(e);
    }
  }
  async setPushSubscribers(req, res, next) {
    try {
      const { login, subscribers } = req.body;
      const answer = await AccountService.setPushSubscribers(login, subscribers);
      res.json(answer);
    } catch (e) {
      next(e);
    }
  }
  async setPosts(req, res, next) {
    try {
      const { login, posts } = req.body;
      const answer = await AccountService.setPosts(login, posts);
      res.json(answer);
    } catch (e) {
      next(e);
    }
  }
  async getAccountInfo(req, res, next) {
    try {
      const login = req.params.login;
      const answer = await AccountService.getAccountInfo(login);
      res.json(answer);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AccountController();
