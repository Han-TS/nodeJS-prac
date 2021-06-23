"use strict";

const User = require('../../models/User');

// 페이지 렌더링 -> index.js 에서 처리
const output = {
  home: (req, res) => {
    res.render('home/index');
  },

  login: (req, res) => {
    res.render('home/login');
  },
};

// 로그인 검증 
const process = {

  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    console.log(response);

    // const id = req.body.id;
    // const psword = req.body.psword;

    // const users = UserStorage.getUsers("id", "psword");

    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = "로그인에 실패하였습니다."

    return res.json(response);

  },
};

module.exports = {
  output,
  process,
};

// { key }  : 오브젝트는 기본적으로 key : value 지만 key만 입력할 경우 key : key 로 인식
// 따라서 위 모듈은 사실 이런 형태
// {
//   home : home,
//   login : login
// }




