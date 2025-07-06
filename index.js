const toggleBtn = document.getElementById('toggleShortcuts');
const shortcutPage = document.getElementById('shortcutPage');
const mainPage = document.getElementById('mainPage');
const goBackBtn = document.getElementById('goBackBtn');

toggleBtn.addEventListener('click', () => {
  mainPage.style.display = 'none';
  shortcutPage.style.display = 'block';
});

goBackBtn.addEventListener('click', () => {
  shortcutPage.style.display = 'none';
  mainPage.style.display = 'block';
});
