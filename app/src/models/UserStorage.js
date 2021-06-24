"use strict";

const fs = require("fs").promises;

class UserStorage {
  // class 내부의 변수, 메소드 등을 직접 조회하려면 앞에 static을 붙혀줘야 함.
  // private 데이터를 불러올 수 있도록 하는 메소드
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static getUsers(...fields) { // ...변수명 : 원하는 개수의 변수를 배열의 형태로 받아옴
    const newUsers = fields.reduce((newUsers, field) => {  // reduce((누산기, 초기값, 처리할인덱스, reduce를 호출한 배열, 누산기의 초기값 ) => {}) 
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);

  }



  static save(userInfo) {
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };


  }

}



module.exports = UserStorage;