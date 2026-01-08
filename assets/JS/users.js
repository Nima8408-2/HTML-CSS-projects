// collapsible users list JS code

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems, {});

  const addUserButton = document.getElementById("add_user_button");
  addUserButton.addEventListener("click", () => {
    document.querySelector(".add_user_modal").classList.add("show");
    document
      .querySelector(".add_user_modal_background")
      .classList.remove("dis-none");
  });

  document
    .querySelector(".add_user_modal_background")
    .addEventListener("click", (e) => {
      document.querySelector(".add_user_modal").classList.remove("show");
      e.target.classList.add("dis-none");
    });
});

setTimeout(function () {
  console.log("start ...");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      console.log("end ...");
      console.log(json);

      let html = json.map(user => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
          <td>
            <i class="material-icons green-text m-l-5 m-r-5 hov-pointer">edit</i>
            <i class="material-icons red-text m-l-5 m-r-5 hov-pointer">delete_forever</i>
          </td>
        </tr>`).join('');

      document.querySelector('.desktop_table_body').innerHTML = html;
    });
}, 5000);