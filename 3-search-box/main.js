// document.querySelector(".search-btn").addEventListener("click", function () {
//   this.parentElement.classList.toggle("open");
//   this.previousElementSibling.focus();
// });

const searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", () => {
  const parent = searchButton.parentElement; // searchButton.parentElement: Lấy phần tử cha trực tiếp của searchButton. Mục đích: Truy cập vào phần tử cha (container của nút và input).
  parent.classList.toggle("open"); // Thêm class nếu nó chưa tồn tại hoặc xóa class nếu nó đã tồn tại
  parent.querySelector("input").focus(); // Đặt con trỏ vào input để người dùng có thể nhập ngay lập tức
});
