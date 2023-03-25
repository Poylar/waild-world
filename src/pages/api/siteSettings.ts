import axios from 'axios';

interface I_Data {
  data?: {
    attributes: {
      Logo: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
}

const siteSettings = () => {
  return axios
    .get<I_Data>(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/site-setting`, {
      params: {
        populate: '*',
      },
    })
    .then((res) => {
      return res.data;
    });
};

export type { I_Data };
export default siteSettings;
