import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function AddMovie() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        genre: [],
        rating: '',
        languages: [],
        duration: '',
        price: '',
        poster: '',
        gif: '',
        showtimes: '',
      });

      let baseUrl = "http://localhost:8000";
      if (import.meta.env.MODE === "production") {
        baseUrl = "https://adyaflix-backend.onrender.com"; 
      }

      const navigate = useNavigate()

    

    useEffect(()=>{
      if(localStorage.getItem('user')){
        const user = JSON.parse(localStorage.getItem('user')!)
        if(user.role !== 'admin'){
         navigate("/")
        }
      }else{
        navigate("/")
      }
    },[])
    
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleArrayChange = (e: any, field: string) => {
        const { value } = e.target;
        setFormData({
          ...formData,
          [field]: value.split(',').map((item: string) => item.trim()),
        });
      };
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${baseUrl}/movie/addMovie`, formData,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          
          });
          console.log('Movie created successfully:', response.data);
          // Reset form fields after successful submission
          setFormData({
            title: '',
            description: '',
            genre: [],
            rating: '',
            languages: [],
            duration: '',
            price: '',
            poster: '',
            gif: '',
            showtimes: '',
          });
        } catch (error) {
          console.error('Error creating movie:', error);
        }
      };
    
      return (
        <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Create Movie</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Title:</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-1">Description:</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <div>
              <label className="block mb-1">Genre:</label>
              <input type="text" name="genre" value={formData.genre.join(',')} onChange={(e) => handleArrayChange(e, 'genre')} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.genre.map((item: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 rounded-md">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1">Rating:</label>
              <input type="text" name="rating" value={formData.rating} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block mb-1">Languages:</label>
              <input type="text" name="languages" value={formData.languages.join(',')} onChange={(e) => handleArrayChange(e, 'languages')} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.languages.map((item: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-gray-200 rounded-md">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-1">Duration:</label>
              <input type="text" name="duration" value={formData.duration} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            {/* Other input fields go here */}
            <button type="submit" className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      );
}

export default AddMovie;
