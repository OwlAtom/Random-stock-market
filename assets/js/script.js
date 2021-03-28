window.addEventListener('load', () => {
  const currentYear = new Date().getFullYear();
  const title = document.getElementById('copyright');
  title.innerHTML = `© ${currentYear} OwlAtom.dev`;
});
