"use strict";

class UserStorage {
  // 임시 계정 DB
  static #users = { // # : private(은닉) 처리
    id: ["hant616", "나개발", "김팀장"],
    psword: ["1234", "12345", "123456"],
    name: ["태석", "나개발", "김팀장"],
  };

  // class 내부의 변수, 메소드 등을 직접 조회하려면 앞에 static을 붙혀줘야 함.

  // private 데이터를 불러올 수 있도록 하는 메소드
  static getUsers(...fields) { // ...변수명 : 원하는 개수의 변수를 배열의 형태로 받아옴
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {  // reduce((누산기, 초기값, 처리할인덱스, reduce를 호출한 배열, 누산기의 초기값 ) => {}) 
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };


  }

}



module.exports = UserStorage;