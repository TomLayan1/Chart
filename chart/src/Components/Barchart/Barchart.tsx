import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Barchart:React.FC = () => {
  const [barData, setBarData] = useState<unknown>(null);
  const [error, setError] = useState<string>('')
  console.log(barData)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products')
        setBarData(response?.data)
      } catch (error) {
        setError((error as Error).message || 'An error occured')
      }
    }


    fetchData()
  }, [])

  return (
    <div>Barchart</div>
  )
}

export default Barchart