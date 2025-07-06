// Page switching logic
const mainPage = document.getElementById('mainPage');
const shortcutPage = document.getElementById('shortcutPage');
const advancedPage = document.getElementById('advancedPage');

const showShortcuts = document.getElementById('showShortcuts');
const showAdvanced = document.getElementById('showAdvanced');
const goBackBtn = document.getElementById('goBackBtn');
const goBackBtnAdvanced = document.getElementById('goBackBtnAdvanced');

showShortcuts.addEventListener('click', () => {
  mainPage.style.display = 'none';
  advancedPage.style.display = 'none';
  shortcutPage.style.display = 'block';
});

showAdvanced.addEventListener('click', () => {
  mainPage.style.display = 'none';
  shortcutPage.style.display = 'none';
  advancedPage.style.display = 'block';
});

goBackBtn.addEventListener('click', () => {
  shortcutPage.style.display = 'none';
  mainPage.style.display = 'block';
});

goBackBtnAdvanced.addEventListener('click', () => {
  advancedPage.style.display = 'none';
  mainPage.style.display = 'block';
});


// Floating menu 4-second display logic
const mainToggle = document.getElementById("mainToggle");
const menuOptions = document.getElementById("menuOptions");

let hideTimer;

function showMenu() {
  clearTimeout(hideTimer);
  menuOptions.style.display = "flex";
}

function hideMenuWithDelay() {
  hideTimer = setTimeout(() => {
    menuOptions.style.display = "none";
  }, 1000); // 4 seconds
}

// Hover event listeners
mainToggle.addEventListener("mouseenter", showMenu);
mainToggle.addEventListener("mouseleave", hideMenuWithDelay);
menuOptions.addEventListener("mouseenter", showMenu);
menuOptions.addEventListener("mouseleave", hideMenuWithDelay);
