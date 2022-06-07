import axios from 'axios';

export const baseUrl = "https://software-ing.herokuapp.com/api";

export const dataApi = async (url, jwt) => {
    const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
    });

    return data;
}
