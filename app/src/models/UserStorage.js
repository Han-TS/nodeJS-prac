// DB CRUD 역할 (데이터 검증 및 조작은 User.js에서)

"use strict";

const { resolveInclude } = require('ejs');
const db = require('../config/db');


class UserStorage {

  // 유저 정보 조회
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM users WHERE id = ?;";
      db.query(queryString, [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
      db.query(queryString, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

}



module.exports = UserStorage;