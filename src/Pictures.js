import axios from 'axios'
import {useState, useEffect} from 'react';

const BASE_URL = "http://127.0.0.1:5000/";

/** Pictures Component
 * Displays all images
 * 
 * props:
 * -none
 * 
 * state:
 * -pictureUrls: an array of urls
 * -isLoading: t/f
 * 
 * App -> Pictures
 */


function Pictures() {
  const [pictureUrls, setPictureUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function(){

      async function getPictureUrls() {
        let resp = await axios.get(`${BASE_URL}images`);
        setPictureUrls(resp.data);
        setIsLoading(false);
      }
      if(isLoading)getPictureUrls();
    },[isLoading]

  )

  function generateTags() {
    return pictureUrls.map(p => {
        return <img src={p}
                    key={p}/>
      }
    )
  }

  return (
    <div className="Pictures">
      {generateTags()}
    </div>
  )

}

export default Pictures;