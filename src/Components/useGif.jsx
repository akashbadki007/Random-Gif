import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

function useGif(tag) {
  const [gif, setGif] = useState('');
  const [loading,setLoading] = useState(true);
  const API_KEY = 'JxM5USWhbrFJzOHd3tRiG5CngjFeIgeB';
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData() {
    setLoading(true);
    try {
        const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
    }
    catch {
        console.log("Fetching Error.....");
    }
    setLoading(false);
}

useEffect(() => {
    fetchData();
},[])

return {gif,loading,fetchData}

}

export default useGif