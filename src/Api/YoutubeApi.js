import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': '5ff8cd745emshad33e535db234b8p1ed225jsn3fe817b800e4',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const data = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}