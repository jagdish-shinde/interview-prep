import { useState } from 'react'
import SearchBar from '../src/components/search-bar/search-bar.jsx'
import './App.css'
import Medicines from './components/medicines/medicines.jsx'

function App() {

  const [medicine, setMedicine] = useState('')

  return (
    <main>
      <h1 className='heading'>Cappsule Web Development Test</h1>
      <SearchBar 
        setMedicine = {setMedicine}
      />
      <Medicines 
        medicine = {medicine}
      />
    </main>
  )
}

export default App
