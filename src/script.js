// Avatar dropdown
const avatarBtn = document.getElementById("avatarButton");
const dropdown = document.getElementById("dropdownMenu");
avatarBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (!avatarBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});