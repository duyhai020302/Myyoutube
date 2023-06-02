import axios from 'axios';


const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  //'ba63fcccb9msh233c1d839c1dc7ap1e1b64jsn556af82b3c36'

//   /baseURL/getVideo as an example
  export const fetchFromAPI=async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`, options);  //what ever request made, always want to start with base url
    return data;

    }