/* eslint-disable no-restricted-globals */
self.addEventListener('message', (e) => {
  const data = {
    msg: 'right back at ya',
  };
  data.e = e.data;
  postMessage(data);
});
