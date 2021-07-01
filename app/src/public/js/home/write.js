"use strict";

const title = document.querySelector('#title');
const date = document.querySelector('#date');
const createBtn = document.querySelector('#button');

createBtn.addEventListener("click", posting());

function posting() {
  if (!title.value) return alert("내용을 입력해주세요.")
  if (!date.value) return alert("마감일을 입력해주세요.");

  const req = {
    title: title.value,
    date: date.value
  };

  fetch("/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/list";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("게시물 작성 중 에러 발생"));
    });
}