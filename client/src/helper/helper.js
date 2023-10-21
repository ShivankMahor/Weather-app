import axios from 'axios'
export async function getWeatherDetails(city){
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: city },
    headers: {
      'X-RapidAPI-Key': 'd12717f3bcmsh2d96e142924b6b8p1fa91ajsnfc49ecfc3e96',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }
    try{
      const response = await axios.request(options);
      // const imagee = await axios.request('https://api.unsplash.com/search/photos?page=1&query=office');
      // const data = {...response,imagee};
      return(response.data);
    } catch (error) {
      console.error(error);
    }
  };
