import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    e.target.reset()
  }

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
