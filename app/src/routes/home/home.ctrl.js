"use strict";

const hello = (req, res) => {
  res.render('home/index');
};

const login = (req, res) => {
  res.render('home/login');
};

module.exports = {
  hello,
  login
};

// { key }  : 오브젝트는 기본적으로 key : value 지만 key만 입력할 경우 key : key 로 인식
// 따라서 위 모듈은 사실 이런 형태
// {
//   hello : hello,
//   login : login
// }