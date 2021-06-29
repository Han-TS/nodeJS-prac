// 데이터 검증 및 조작 (DB CRUD는 UserStorage.js 에서)
"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  // 로그인 검증 ======================================
  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.psword === client.psword) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success: false, msg: err };
    }
  };


  // 회원가입 검증 ======================================
  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;