// Central Asia Climate Data — Navigation & Footer
(function() {
  // Determine active page
  const currentPath = window.location.pathname;
  const getActiveClass = (path) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html'))) {
      return 'active';
    }
    if (path !== '/' && currentPath.includes(path.replace('.html', ''))) {
      return 'active';
    }
    return '';
  };

  // Render navigation
  function renderNav() {
    const nav = `
      <header class="site-header">
        <div class="container">
          <a class="brand" href="/">
            <span class="brand-icon">CA</span>
            Central Asia Climate Data
          </a>
          <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="nav">
            <a href="/" class="${getActiveClass('/')}">Home</a>
            <a href="/pages/data.html" class="${getActiveClass('/pages/data')}">Data</a>
            <a href="/pages/methods.html" class="${getActiveClass('/pages/methods')}">Methods</a>
            <a href="/pages/about.html" class="${getActiveClass('/pages/about')}">About</a>
          </nav>
        </div>
      </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', nav);

    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav');
    
    if (toggle && navMenu) {
      toggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });

      // Close nav when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header')) {
          navMenu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // Render footer
  function renderFooter() {
    const year = new Date().getFullYear();
    const footer = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-links">
            <a href="/">Home</a>
            <a href="/pages/data.html">Data</a>
            <a href="/pages/methods.html">Methods</a>
            <a href="/pages/about.html">About</a>
          </div>
          <p class="footer-text">
            &copy; ${year} Central Asia Climate Data. Data derived from public satellite sources.
          </p>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
  }

  // Initialize
  renderNav();
  renderFooter();
})();

