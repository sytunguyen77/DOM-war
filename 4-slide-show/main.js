const listDivImg = document.querySelectorAll(".list-img div");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imgWrap = document.querySelector(".img-wrap img");

let currentIndex = 0;

const setCurrent = (index) => {
  currentIndex = index; // Cập nhật chỉ số hiện tại
  imgWrap.src = listDivImg[index].querySelector("img").src; // Đổi hình ảnh lớn

  // Loại bỏ class 'active' khỏi tất cả các hình ảnh.
  document.querySelector(".list-img .active")?.classList.remove("active");

  // Thêm class 'active' vào hình ảnh hiện tại.
  listDivImg[index].classList.add("active");
};

// Gọi hàm setCurrent để đảm bảo hình ảnh đầu tien đc hiển thị đúng ngay khi trang tải
setCurrent(currentIndex);

// Lắng nghe sự kiện cho các hình ảnh nhỏ
listDivImg.forEach((img, index) =>
  img.addEventListener("click", () => setCurrent(index))
);

// Lắng nghe sực kiện click cho nút next
next.addEventListener("click", () => {
  setCurrent((currentIndex + 1) % listDivImg.length); // Cộng 1 vào currentIndex (tức là chuyển sang hình tiếp theo)
  // Sử dụng toán tử modulo (%) để quay lại hình ảnh đầu tiên nếu đã đến cuối danh sách
});

prev.addEventListener(
  "click",
  () => setCurrent((currentIndex - 1 + listDivImg.length) % listDivImg.length) // Trừ 1 khỏi currentIndex (tức là quay lại hình trước đó)
  // Cộn thêm listDivImg.length để tránh giá trị âm, sau đó dùng modulo(%) để quay lại hình cuối cùng nếu đang ở hình đầu tiên
);

// Tóm tắt
// Cập nhật chỉ số hiện tại, đổi hình lớn, và làm nổi bật hình ảnh nhỏ tương ứng
// Sự kiện click: Giúp người dùng chuyển qua lại giữa các hình ảnh hoặc chọn trực tiếp hình ảnh nhỏ
// Toán tử modulo (%): Đảm bảo chỉ số luôn nằm trong giới hạn danh sách hình ảnh
