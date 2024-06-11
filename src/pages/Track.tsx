import { useEffect, useState } from 'react';
import axios from 'axios';


function Track() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const [ip, setIP] = useState("");


  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  useEffect(() => {
    const sendLocation = () => {
      if (position.latitude && position.longitude) {
        axios.post('https://blueband-backend.onrender.com/track', {
          carId: ip, // Replace with your actual car ID
          latitude: position.latitude,
          longitude: position.longitude,
        })
        .then(response => {
          console.log('Location sent successfully:', response.data);
        })
        .catch(error => {
          console.error('Error sending location:', error);
        });
      }
    };

    

    const handleSuccess = (pos:any) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });
    };

    const handleError = (err:any) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 500,
      });
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }

   

    const intervalId = setInterval(sendLocation, 200);

    return () => clearInterval(intervalId);
  }, [position]);


  const SOS = async()=>{
    try{
        await axios.post("https://blueband-backend.onrender.com/sos",{
            carId:ip,
            message:"Emergency"
        })
    }catch(err){
        console.warn(err)
    }
    
}

  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className='flex flex-col gap-2 p-4 scale-125 bg-gray-200 rounded-md shadow-md'>
      <h1 className='text-green-500 animate-pulse'>Tracking Location</h1>
      <p>IP: {ip}</p>
      <p>Latitude: {position.latitude}</p>
      <p>Longitude: {position.longitude}</p>
      <button onClick={()=>{SOS()}} className='p-2 text-white transition-all bg-red-500 rounded-sm shadow-md hover:scale-95'>SOS</button>
      </div>
    </div>
  );
}

export default Track;
