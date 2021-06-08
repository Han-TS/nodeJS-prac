"use strict";

class UserStorage {
  // 임시 계정 DB
  static #users = { // # : private(은닉) 처리
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "12345", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  // private 데이터를 불러올 수 있도록 하는 메소드
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}



module.exports = UserStorage;