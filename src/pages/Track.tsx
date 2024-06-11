import { useEffect, useState } from 'react';
import axios from 'axios';

function Track() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const sendLocation = () => {
      if (position.latitude && position.longitude) {
        axios.post('http://localhost:5000/track', {
          carId: 71812105043, // Replace with your actual car ID
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
        timeout: 5000,
      });
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }

    const intervalId = setInterval(sendLocation, 2000);

    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <div className='flex items-center justify-center flex-grow'>
      <div className='flex flex-col gap-2 p-4 scale-125 bg-gray-200 rounded-md shadow-md'>
      <h1 className='text-green-500 animate-pulse'>Tracking Location</h1>
      <p>Latitude: {position.latitude}</p>
      <p>Longitude: {position.longitude}</p>
      </div>
    </div>
  );
}

export default Track;
