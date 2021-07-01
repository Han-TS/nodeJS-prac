"use strict";

const { resolveInclude } = require('ejs');
const db = require('../config/db');

class UploadStorage {
  // 게시물 생성
  static async create(poster) {
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO posts(contents, deadline) VALUES(?,?);";
      db.query(queryString, [poster.title, poster.date], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UploadStorage;
