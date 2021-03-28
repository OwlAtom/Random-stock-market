window.addEventListener('load', () => {
  const currentYear = new Date().getFullYear();
  const title = document.getElementById('copyright');
  title.innerHTML = `© ${currentYear} OwlAtom.dev`;
});

const webWorker = new Worker('/assets/js/worker.js');

const data = {
  currentValue: 9000,
  time: 0,
};

const button = document.querySelector('button');
webWorker.addEventListener('message', (e) => {
  console.log(e);
});

button.addEventListener('click', () => {
  webWorker.postMessage(data);
});
