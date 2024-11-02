import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { BarType } from '../../Interface/Interface';



const Barchart:React.FC = () => {
  const [barData, setBarData] = useState<BarType[]>([]);
  const [error, setError] = useState<string>('');
  console.log(barData)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setBarData(response?.data?.products)
      }
      catch (error) {
        setError((error as Error).message || 'An error occurred')
      }
    }

    fetchData()
  }, [])

  return (
    <div className=' bg-slate-100 w-80b lg:w-[30% '>
      <h2 className='p-4 text-center text-4xl font-bold text-green-900'>Bar Chart</h2>

      {

        barData &&
          <ResponsiveContainer width={800} height={300}>
            <BarChart data={barData || []} maxBarSize={30}>
              <XAxis dataKey='brand'/>
              <YAxis/>
              <Bar dataKey='stock' fill="#14532d"/>
            </BarChart>
          </ResponsiveContainer>
      }
    </div>
  )
}

export default Barchart