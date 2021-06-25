"use strict";

const User = require('../../models/User');

// 페이지 렌더링 =========================================================
const output = {
  home: (req, res) => {
    res.render('home/index');
  },

  login: (req, res) => {
    res.render('home/login');
  },

  register: (req, res) => {
    res.render('home/register');
  }
};

// 로그인, 회원가입 검증================================
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  }
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




