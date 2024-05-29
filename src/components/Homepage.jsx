
import Header from './header'
import Searchbox from './search-box'
import Sortingfunc from './sorting-func'
import { useEffect, useState } from 'react';
function Homepage() {

  const [listOfHotels, setListOfHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/hotel?limit=60", {
          headers: {
            'projectId': 'treoo5dhf86s'
          }
        });
        const data = await response.json();
        setListOfHotels(data.data.hotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='bg-black' style={{backgroundImage: "url('https://arc.net/noise-light.png')"}}>
    <Header />
    <Searchbox listOfHotels={listOfHotels} setFilteredHotels={setFilteredHotels}/>
    <Sortingfunc listOfHotels={filteredHotels}/>
    </div>
      
  )
}

export default Homepage
