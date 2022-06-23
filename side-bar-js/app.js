const sidebar = document.querySelector(".sidebar");
const close_btn = document.querySelector(".close-btn");
const toggle = document.querySelector(".sidebar-toggle");
toggle.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

close_btn.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }
});
