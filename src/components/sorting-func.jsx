import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Badge } from "../@/components/ui/badge"; 
import { Button } from "../@/components/ui/button"; 
import { useNavigate } from 'react-router-dom';
export default function Sortingfunc({listOfHotels}) {
  const [sortedHotels, setSortedHotels] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    let sortedList = [...listOfHotels];
    if (sortCriteria === 'price-high-low') {
      sortedList.sort((a, b) => b.rooms[0].price - a.rooms[0].price);
    } else if (sortCriteria === 'price-low-high') {
      sortedList.sort((a, b) => a.rooms[0].price - b.rooms[0].price);
    } else if (sortCriteria === 'rating-high-low') {
      sortedList.sort((a, b) => b.rating - a.rating);
    } else if (sortCriteria === 'rating-low-high') {
      sortedList.sort((a, b) => a.rating - b.rating);
    }
    setSortedHotels(sortedList);
  }, [sortCriteria, listOfHotels]);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  function getRatingLabel(rating) {
    if (rating <= 1) {
      return 'Poor';
    } else if (rating <= 2) {
      return 'Fair';
    } else if (rating <= 3) {
      return 'Good';
    } else if (rating <= 4) {
      return 'Very Good';
    } else {
      return 'Fabulous';
    }
  }

  function handelAvail(hotel){
    navigate(`/hotel/${hotel._id}`)
  }

  return (
    <div>
      <div className="flex justify-end mt-4 mr-2">
        <div className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-4 py-2 shadow-md transition duration-200 ease-in-out">
          <span className="font-semibold flex items-center">
            <FontAwesomeIcon icon={faSort} /> Sort by:
          </span>
          <select
            className="ml-2 border-none bg-transparent focus:outline-none font-medium text-gray-700"
            onChange={handleSortChange}
          >
            <option value="price-high-low" className="text-gray-700">Price (High to Low)</option>
            <option value="price-low-high" className="text-gray-700">Price (Low to High)</option>
            <option value="rating-high-low" className="text-gray-700">Rating (High to Low)</option>
            <option value="rating-low-high" className="text-gray-700">Rating (Low to High)</option>
          </select>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {sortedHotels.map((hotel) => (
          <div key={hotel._id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Hotel Exterior"
              className="w-full h-56 object-cover"
              height="200"
              src={hotel.images[0] || "/placeholder.svg"}
              style={{
                aspectRatio: "280/200",
                objectFit: "cover",
              }}
              width="280"
            />
            <div className="p-4">
              <h3 className="mt-2 font-bold text-xl">{hotel.name}</h3>
              <p className="text-sm text-gray-500">{hotel.location}</p>
              <div className="mt-2">
                <p className="font-semibold text-sm">{hotel.rooms[0].roomType}</p>
                <ul className="text-sm text-gray-500 my-1">
                  <li>{hotel.rooms[0].bedDetail}</li>
                  <li>{hotel.rooms[0].cancellationPolicy}</li>
                  <li>${hotel.rooms[0].price}</li>
                </ul>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <Badge variant="secondary">{getRatingLabel(hotel.rating)}</Badge>
                    <span className="text-sm text-gray-500 ml-1">{hotel.rating} Rating</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4" onClick={()=>handelAvail(hotel)}>
                  <Button>See availability</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
