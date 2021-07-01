"use strict";

const inputValue = document.querySelector('#search');
const searchBtn = document.querySelector('#search');
const deleteBtn = document.querySelector('.delete');

// searchBtn.addEventListener("searchBtn", searchList());
deleteBtn.addEventListener("deleteBtn", deleteList(e));

function deleteList(e) {
  const listNum = e.target.dataset.

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






// function searchList() {

//   const req = {
//     title: title.value,
//     date: date.value
//   };

//   fetch("/add", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(req)
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.success) {
//         location.href = "/list";
//       } else {
//         if (res.err) return alert(res.err);
//         alert(res.msg);
//       }
//     })
//     .catch((err) => {
//       console.error(new Error("게시물 작성 중 에러 발생"));
//     });
// }

