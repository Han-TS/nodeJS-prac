"use strict";
/*
<상태 코드 >
200 ~ : 정상 응답
300 ~ : 페이지 이동
400 ~ : 클라이언트 실수
500 ~ : 서버 실수
*/
const logger = require("../../config/logger");
const User = require("../../models/User");
const Upload = require("../../models/Upload");

// 페이지 렌더링 =========================================================
const output = {
  home: (req, res) => {
    logger.info('GET / 304 "홈 화면으로 이동"');
    res.render('home/index');
  },

  login: (req, res) => {
    logger.info('GET /login 304 "로그인 화면으로 이동"');
    res.render('home/login');
  },

  register: (req, res) => {
    logger.info('GET /register 304 "회원가입 화면으로 이동"');
    res.render('home/register');
  },

  write: (req, res) => {
    logger.info('GET /write 304 "게시물 등록 화면으로 이동"');
    res.render('home/write');
  },

  list: (req, res) => {
    logger.info('GET /write 304 "게시물 목록 화면으로 이동"');
    res.render('home/list');
  },
};

// 로그인, 회원가입 검증================================
const process = {
  // 로그인 검증
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
  //  회원가입 검증
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  }
};

// 게시물 등록
const poster = {
  // 게시물 등록
  create: async (req, res) => {
    const upload = new Upload(req.body);
    const response = await upload.create()

    const url = {
      method: "POST",
      path: "/add",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  }
}


// 로그 기록 함수
const log = (response, url) => {
  if (response.err)
    logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.err}`);
  else
    logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.msg || ""}`);
}

module.exports = {
  output,
  process,
  poster,
};

// { key }  : 오브젝트는 기본적으로 key : value 지만 key만 입력할 경우 key : key 로 인식
// 따라서 위 모듈은 사실 이런 형태
// {
//   home : home,
//   login : login
// }



