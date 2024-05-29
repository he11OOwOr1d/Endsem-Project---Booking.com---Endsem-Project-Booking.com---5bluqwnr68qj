import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function HotelDetail() {
  const obj = useParams()
  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel/${obj.hotelid}`, {
          method: 'GET',
          headers: {
            'projectId': 'treoo5dhf86s'
            
          },
        });
        const result = await response.json();
        console.log(result)

        if (response.ok) {
          console.log(result)
        } else {
        }
      } catch (error) {
      }
    }
    fetchHotelDetails()
  }, [])
  console.log(obj)
  return (
    <div>Hello, {obj.hotelid}</div>

  )
}
