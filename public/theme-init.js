// Applies the saved theme before first paint so the page never flashes the wrong colours.
// Light is the default; only an explicit saved choice of "dark" switches it.
(function () {
  var theme = 'light';
  try {
    if (localStorage.getItem('lemuria_theme') === 'dark') theme = 'dark';
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#1E1914' : '#F2E8D2');
})();
