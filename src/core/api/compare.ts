import axios from 'axios';

const compare = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Basic V0VCOg==',
    'X-Platform': 'WEB',
    'X-Customer-Operator-type': 'KCELL',
  },
  baseURL: 'https://sdu-diplom.herokuapp.com/api/test',
});

compare.interceptors.request.use(({ headers, ...request }) => ({
  ...request,
  headers,
}));

compare.interceptors.response.use(
    // tslint:disable-next-line:ter-arrow-parens
    (response) => response, (error) => {
      return Promise.reject(error);
    });

export default compare;
