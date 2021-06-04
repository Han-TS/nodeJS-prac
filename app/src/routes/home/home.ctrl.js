"use strict";

const output = {
  home: (req, res) => {
    res.render('home/index');
  },

  login: (req, res) => {
    res.render('home/login');
  },
};

const users = {
  id: ["woorimIT", "나개발", "김팀장"],
  psword: ["1234", "12345", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        })
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });

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