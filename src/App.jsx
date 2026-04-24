import './App.css'

function App() {

  return (
    <>
      <form action="">
        <label htmlFor="name" className=''>Name: </label>
        <input type="text" name="name" />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" />

        <label htmlFor="file">File: </label>
        <input type="file" name="file" />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
