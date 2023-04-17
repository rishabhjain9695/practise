import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import { useSelector } from 'react-redux';
import chainsmokers from '../../imagess/chainsmokers.webp'
function HomePage() {
    const userSongsList = useSelector((state) => state.loginreducer.songs);
    const searchingSong=useSelector((state)=>state.loginreducer.searchingSong);
    const [filteredSong, setFilteredSong] = useState([]);
    useEffect(()=>{
        let debounce;
        console.log(searchingSong,"ayush");
        if(searchingSong==""){
              setFilteredSong([]);
        }
        else{
            debounce = setTimeout(() => findSearchSong(searchingSong), 1000); // understand logic wrong implemented here of empty string 
        }
       
        return () => clearTimeout(debounce);
    },[searchingSong])
    const findSearchSong = (searchValue) => {
        let filteredData = userSongsList.filter((value) => value.SongName.toLowerCase().includes(searchValue.toLowerCase()));
        console.log(filteredData,"filtered")
        if (filteredData.length !== 0) {
          setFilteredSong(filteredData);
        }
        else {
            setFilteredSong([]);

        }
      }
    console.log(userSongsList,"usersonglisttttt");
  return (
    <div id="HomePagediv">
       <div className='main-container'>
        <div className='spotify-playlists'>
          <h2>All Songs</h2>
          <div className='spotifydiv'>
            <div className="list">
      { filteredSong?.map((e, i) => {
                return (

                  <div className="item" key={i}>
                    <img src={chainsmokers} alt="" />

                    <h4 style={{ color: 'white' }}>{e.SongName}</h4>
                    <i  className="fa-solid fa-play" style={{ color: 'white' }} onClick={() => {
                        alert("please login first");
                    }}></i>

                  </div>

                )
              })
      }
    </div>
    </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage
