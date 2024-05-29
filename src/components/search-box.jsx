import React, { useState, useEffect } from "react";
import { Select, SelectItem, Button, Badge } from "@nextui-org/react";

export default function App({listOfHotels, setFilteredHotels}) {
  const [selectedCity, setSelectedCity] = useState(null);
  
  const cities = [
    { "_id": "65292ae86ea9a006f4ad6855", "cityState": "Mumbai" },
    { "_id": "65292ae86ea9a006f4ad6856", "cityState": "Delhi" },
    { "_id": "65292ae86ea9a006f4ad6857", "cityState": "Bangalore" },
    { "_id": "65292ae86ea9a006f4ad6858", "cityState": "Kolkata" },
    { "_id": "65292ae86ea9a006f4ad6859", "cityState": "Chennai" },
    { "_id": "65292ae86ea9a006f4ad685a", "cityState": "Hyderabad" },
    { "_id": "65292ae86ea9a006f4ad685b", "cityState": "Pune" },
    { "_id": "65292ae86ea9a006f4ad685c", "cityState": "Ahmedabad" },
    { "_id": "65292ae86ea9a006f4ad685d", "cityState": "Surat" },
    { "_id": "65292ae86ea9a006f4ad685e", "cityState": "Jaipur" },
    { "_id": "65292ae86ea9a006f4ad685f", "cityState": "Lucknow" },
    { "_id": "65292ae86ea9a006f4ad6860", "cityState": "Kanpur" },
    { "_id": "65292ae86ea9a006f4ad6861", "cityState": "Nagpur" },
    { "_id": "65292ae86ea9a006f4ad6862", "cityState": "Indore" },
    { "_id": "65292ae86ea9a006f4ad6863", "cityState": "Thane" },
    { "_id": "65292ae86ea9a006f4ad6864", "cityState": "Bhopal" },
    { "_id": "65292ae86ea9a006f4ad6865", "cityState": "Visakhapatnam" },
    { "_id": "65292ae86ea9a006f4ad6866", "cityState": "Pimpri-Chinchwad" },
    { "_id": "65292ae86ea9a006f4ad6867", "cityState": "Patna" },
    { "_id": "65292ae86ea9a006f4ad6868", "cityState": "Vadodara" },
    { "_id": "65292ae86ea9a006f4ad6869", "cityState": "Ghaziabad" },
    { "_id": "65292ae86ea9a006f4ad686a", "cityState": "Ludhiana" },
    { "_id": "65292ae86ea9a006f4ad686b", "cityState": "Agra" },
    { "_id": "65292ae86ea9a006f4ad686c", "cityState": "Nashik" },
    { "_id": "65292ae86ea9a006f4ad686d", "cityState": "Faridabad" },
    { "_id": "65292ae86ea9a006f4ad686e", "cityState": "Meerut" },
    { "_id": "65292ae86ea9a006f4ad686f", "cityState": "Rajkot" },
    { "_id": "65292ae86ea9a006f4ad6870", "cityState": "Kalyan-Dombivali" },
    { "_id": "65292ae86ea9a006f4ad6871", "cityState": "Vasai-Virar" },
    { "_id": "65292ae86ea9a006f4ad6872", "cityState": "Varanasi" },
    { "_id": "65292ae86ea9a006f4ad6873", "cityState": "Srinagar" },
    { "_id": "65292ae86ea9a006f4ad6874", "cityState": "Dhanbad" },
    { "_id": "65292ae86ea9a006f4ad6875", "cityState": "Jodhpur" },
    { "_id": "65292ae86ea9a006f4ad6876", "cityState": "Amritsar" },
    { "_id": "65292ae86ea9a006f4ad6877", "cityState": "Raipur" },
    { "_id": "65292ae86ea9a006f4ad6878", "cityState": "Allahabad" },
    { "_id": "65292ae86ea9a006f4ad6879", "cityState": "Coimbatore" },
    { "_id": "65292ae86ea9a006f4ad687a", "cityState": "Jabalpur" },
    { "_id": "65292ae86ea9a006f4ad687b", "cityState": "Gwalior" },
    { "_id": "65292ae86ea9a006f4ad687c", "cityState": "Vijayawada" }
  ];

  useEffect(() => {
    if (selectedCity) {
      const filtered = listOfHotels.filter(hotel => hotel.location.toLowerCase().includes(selectedCity.toLowerCase()));
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels(listOfHotels);
    }
  }, [selectedCity, listOfHotels]);

  const handleCityChange = (value) => {
    setSelectedCity(value.target.value);
  };


  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select
              labelPlacement="outside"
              label="Select City"
              className="max-w-xs"
              value={selectedCity}
              onChange={handleCityChange}
            >
              {cities.map((city) => (
                <SelectItem key={city.cityState} value={city.cityState}>
                  {city.cityState}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>

      
    </div>
  );
}
