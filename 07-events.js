const form=document.getElementById("form");
const title=document.getElementById("title");
//addEventListener lắng nghe sự kiện submit
// xảy ra khi ấn btn submit
form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    // ngăn cản đẩy thông tin lên thanh url
    event.preventDefault();
    const title1=title.value;
    console.log({title1});

}