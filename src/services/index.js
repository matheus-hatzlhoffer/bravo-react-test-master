import axios from 'axios';

const list = (url) => {
  let cancel;
  const request = axios.get(url, {
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  });
  return { request, cancel };
};

export const service = {
  list,
};
