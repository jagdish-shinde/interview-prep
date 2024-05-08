import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    // sessionStorage.setItem('name', 'jagdish');
  }, [])

  async function handleClick () {
    // const axiosInstance = axios.create({
    //   withCredentials: true // Include cookies with cross-origin requests
    // });
    // await axiosInstance.post('http://localhost:3000/student/login')
    // console.log(document.cookie)

    fetch('http://localhost:3000/student/login', {
    method: 'POST',
    mode:  'cors' ,
    credentials: 'include', // Include cookies with the request
    headers: {
      'Content-Type': 'application/json' // Set content type if sending JSON data
    },
    body: JSON.stringify({
      // Add request data if needed
    })
  })
  .then(response => {
    // Handle successful response
    return response.json(); // Assuming response is JSON
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });

  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
