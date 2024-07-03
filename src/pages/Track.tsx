import { useEffect, useState } from 'react';
import axios from 'axios';


function Track() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const [ip, setIP] = useState<number>();

  const getData = async () => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
      console.log(res.data);
      const split_ip = res.data.ip.split('.');
      console.log('split_ip[3] type: ', typeof split_ip[3]); // Should log 'string'
      
      const parsedIP = parseInt(split_ip[3]);
      setIP(parsedIP);
      console.log('parsedIP type: ', typeof parsedIP); // Should log 'number'
    } catch (error) {
      console.error("Error fetching IP address: ", error);
    }
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  useEffect(() => {
    const sendLocation = () => {
      if (position.latitude && position.longitude) {
        // https://blueband-backend.onrender.com/track
        // axios.post('https://blueband-backend.onrender.com/track', {
        //   carId: ip, // Replace with your actual car ID
        //   latitude: position.latitude,
        //   longitude: position.longitude,
        // })

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

    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSuccess = (pos:any) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

   

    const intervalId = setInterval(sendLocation, 2000);

    return () => clearInterval(intervalId);
  }, [position]);


  const SOS = async()=>{
    try{
        // await axios.post("https://blueband-backend.onrender.com/sos",{
        //     carId:ip,
        //     message:"Emergency"
        // })

        await axios.post("https://blueband-backend.onrender.com/sos",{
          carId:ip,
          message:"Emergency"
      })
    }catch(err){
        console.warn(err)
    }
    
}


const OK = async()=>{
  try{
    await axios.post("https://blueband-backend.onrender.com/ok",{
      carId:ip,
      message:"Ok"
    })

 

  }catch(err){
    await axios.post("https://blueband-backend.onrender.com/ok",{
      carId:ip,
      message:"Ok"
    })
    console.warn(err)
  }
}

  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className='flex flex-col gap-2 p-4 scale-125 bg-gray-200 rounded-md shadow-md'>
      <h1 className='text-green-500 animate-pulse'>Tracking Location</h1>
      <p>IP: {ip?.toString()}</p>
      <p>Latitude: {position.latitude}</p>
      <p>Longitude: {position.longitude}</p>
      <button onClick={()=>{OK()}} className='p-2 text-white transition-all bg-green-500 rounded-sm shadow-md hover:scale-95'>OK</button>
      <button onClick={()=>{SOS()}} className='p-2 text-white transition-all bg-red-500 rounded-sm shadow-md hover:scale-95'>SOS</button>
      </div>
    </div>
  );
}

export default Track;