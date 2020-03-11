let underlineMenuItems = document.querySelectorAll(".underline-menu li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    underlineMenuItems.forEach(item => item.classList.remove("active"));
    item.classList.add("active");
  });
});