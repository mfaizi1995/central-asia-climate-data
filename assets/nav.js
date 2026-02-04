function renderNav() {
  const nav = `
    <header class="site-header">
      <div class="container">
        <a class="brand" href="/">Central Asia Climate Data</a>
        <nav class="nav">
          <a href="/">Home</a>
          <a href="/pages/data.html">Data</a>
          <a href="/pages/methods.html">Methods</a>
          <a href="/pages/about.html">About</a>
        </nav>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML("afterbegin", nav);
}
renderNav();
