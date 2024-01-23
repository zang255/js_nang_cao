const title = document.getElementById('title');

// add class vào html
title.classList.add('dark','a','b');
console.log(title);

//title.innerText="xin chào";  // kh thể nhúng html
title.innerHTML = "xin chào";  //có thể nhúng được html


//document.querySelector()  lấy ra thằng đầu tiên

//document.queryAll() Lấy ra hết 


// create new element
const idMain=document.getElementById('main');
const newElm = document.createElement('div');

idMain.appendChild(newElm);// chèn code vào html

console.log(idMain);