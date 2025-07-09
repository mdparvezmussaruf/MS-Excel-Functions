// Page references
const mainPage = document.getElementById('mainPage');
const shortcutPage = document.getElementById('shortcutPage');
const advancedPage = document.getElementById('advancedPage');

// Button references
const showShortcuts = document.getElementById('showShortcuts');
const showAdvanced = document.getElementById('showAdvanced');
const goBackBtn = document.getElementById('goBackBtn');
const goBackBtnAdvanced = document.getElementById('goBackBtnAdvanced');

// Show shortcut page
showShortcuts.addEventListener('click', () => {
  mainPage.style.display = 'none';
  advancedPage.style.display = 'none';
  shortcutPage.style.display = 'block';
});

// Show advanced page
showAdvanced.addEventListener('click', () => {
  mainPage.style.display = 'none';
  shortcutPage.style.display = 'none';
  advancedPage.style.display = 'block';
});

// Go back to main from shortcuts
goBackBtn.addEventListener('click', () => {
  shortcutPage.style.display = 'none';
  mainPage.style.display = 'block';
});

// Go back to main from advanced
goBackBtnAdvanced.addEventListener('click', () => {
  advancedPage.style.display = 'none';
  mainPage.style.display = 'block';
});

// Floating menu hover logic (4-second display)
const mainToggle = document.getElementById("mainToggle");
const showShortcutsBtn = document.getElementById("showShortcuts");
const showAdvancedBtn = document.getElementById("showAdvanced");

let hideTimer;

// Show both buttons
function showFloatingButtons() {
  clearTimeout(hideTimer);
  showShortcutsBtn.style.display = "block";
  showAdvancedBtn.style.display = "block";
}

// Hide after delay
function hideFloatingButtonsWithDelay() {
  hideTimer = setTimeout(() => {
    showShortcutsBtn.style.display = "none";
    showAdvancedBtn.style.display = "none";
  }, 1000); // 4 seconds
}

// Hover handling
mainToggle.addEventListener("mouseenter", showFloatingButtons);
mainToggle.addEventListener("mouseleave", hideFloatingButtonsWithDelay);
showShortcutsBtn.addEventListener("mouseenter", showFloatingButtons);
showShortcutsBtn.addEventListener("mouseleave", hideFloatingButtonsWithDelay);
showAdvancedBtn.addEventListener("mouseenter", showFloatingButtons);
showAdvancedBtn.addEventListener("mouseleave", hideFloatingButtonsWithDelay);
