// Hamburger toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Dropdown toggle desktop dan mobile
function toggleDropdown(id){
  const el = document.getElementById(id);
  el.classList.toggle('hidden');
}
