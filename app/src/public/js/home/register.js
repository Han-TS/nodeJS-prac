"use strict";

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const psword = document.querySelector('#psword');
const confirmPsword = document.querySelector('#confirm-psword');
const registerBtn = document.querySelector('#button');

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    psword: psword.value
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }

    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}   // new Error("abc") 
    // "abc"
    // 두 가지 모두 문제는 없지만 출력 형태가 다름  

