let tags = ["nodejs", "reactjs", "sadsad"];
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const createTag = () => {
  ul.innerHTML = ``;
  tags.forEach((tag, index) => {
    let liTag = `
      <li>${tag}<i class="uit uit-multiply" onclick="removeTag('${index}')"></i></li>
    `;
    ul.innerHTML += liTag;
  });
  ul.appendChild(input);
  input.focus();
};
createTag(); // callback , fibonaci , đệ quy , ngăn sếp ( stack ) , cây nhị phân
// CRUD : Create , Read , Update , Delete

const removeTag = (index) => {
  tags.splice(index, 1);
  createTag();
};

const addTag = (e) => {
  // input.value === "" ? alert("Không được để trống") : tags.push(input.value);
  if (e.key === "Enter") {
    tags.push(input.value);
    input.value = "";
    createTag();
  }
};

input.addEventListener("keyup", addTag);
