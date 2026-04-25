import './App.css'
import axios from 'axios';

function App() {

  const sendData = async (data) => {
    try {
      // 1. Pass formData directly (do NOT wrap it in { })
      // 2. Add the multipart/form-data header
      const response = await axios.post('http://localhost:5000/api/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the FormData object directly from the form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // ---------------frontend validation to avoids unnecessary API calls-----------------------
    if (data.file && data.file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    if (!data.file || !data.file.type.startsWith("image/")) {
      alert("Only images are allowed");
      return;
    }

    // Pass it directly to your function
    sendData(data);
    console.log(data);
    // Reset the form
    e.target.reset();
  };

  return (
    <>
      <div>
        <form className='w-lg mx-auto mt-40 bg-teal-200 p-10 rounded-lg shadow-lg text-gray-700' onSubmit={handleSubmit}>

          <label htmlFor="name" className=''>Name: </label>
          <input
            type="text"
            name="name"
            placeholder='Alex macoy'
            className='w-full border border-gray-500 rounded-lg mb-5 p-2 bg-amber-50' />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            className='w-full border border-gray-500 rounded-lg mb-5 p-2 bg-amber-50' />

          <label htmlFor="file">File: </label>
          <input type="file" name="file"
            className='w-full border border-gray-500 rounded-lg mb-5 p-2 bg-amber-50' />

          <button type="submit" className='w-full bg-blue-300 p-4 rounded-2xl hover:shadow-lg'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
