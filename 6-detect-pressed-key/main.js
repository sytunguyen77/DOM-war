// Lấy phần tử có class "box", đây là nơi sẽ hiển thị thông tin khi người dùng nhấn phím.
const box = document.querySelector(".box");

// Lấy các phần tử DOM nơi thông tin chi tiết sẽ được hiển thị:
const eKey = document.querySelector(".card.key p:last-child"); // Hiển thị tên phím được nhấn.
const eLocation = document.querySelector(".card.location p:last-child"); // Hiển thị vị trí phím.
const eWhich = document.querySelector(".card.which p:last-child"); // Hiển thị mã số phím (which).
const eCode = document.querySelector(".card.code p:last-child"); // Hiển thị mã định danh của phím.

// Lắng nghe sự kiện "keydown", được kích hoạt khi người dùng nhấn phím bất kỳ.
document.addEventListener("keydown", (e) => {
  // Kiểm tra nếu mã phím là 32 (phím Space), hiển thị "Space", nếu không lấy giá trị phím từ e.key.
  let keyName = e.keyCode === 32 ? "Space" : e.key;

  // Hiển thị mã phím (e.which) vào phần tử có class "result".
  document.querySelector(".result").innerText = e.which;

  // Cập nhật thông tin vào các phần tử đã chọn:
  eKey.innerText = keyName; // Hiển thị tên của phím.
  eLocation.innerText = e.location; // Hiển thị vị trí của phím (bên trái, bên phải, tiêu chuẩn).
  eWhich.innerText = e.which; // Hiển thị mã số phím.
  eCode.innerText = e.code; // Hiển thị mã định danh của phím.

  // Ẩn thông báo mặc định (nếu có) và hiển thị thông tin trong box.
  document.querySelector(".alert").classList.add("hide"); // Thêm class "hide" vào thông báo.
  box.classList.remove("hide"); // Loại bỏ class "hide" để hiển thị phần tử "box".
});
