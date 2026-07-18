(() => {
  const currentPage = document.body.dataset.page;
  const activeLink = document.querySelector(`[data-nav="${currentPage}"]`);
  if (activeLink) activeLink.setAttribute('aria-current', 'page');

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('primary-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menuButton.textContent = isOpen ? '✕' : '☰';
    });

    navigation.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.textContent = '☰';
    });
  }
})();
