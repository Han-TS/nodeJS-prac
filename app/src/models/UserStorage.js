// DB CRUD 역할 (데이터 검증 및 조작은 User.js에서)
"use strict";

const { resolveInclude } = require('ejs');
const db = require('../config/db');

class UserStorage {
  // 유저 정보 DB에서 조회
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM users WHERE id = ?;";
      db.query(queryString, [id], (err, data) => {
        if (err) reject(err);
        else resolve(data[0]);
      });
    });
  }
  // 유저 정보 DB에 저장
  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO users(id, name, psword) VALUES(?,?,?);";
      db.query(queryString, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

}

module.exports = UserStorage;