import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      params: {
        populate: '*',
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log('Error fetching data:', error.message);
      throw error;
    });

export default fetcher;
