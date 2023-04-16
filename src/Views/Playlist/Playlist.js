
import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Playlists.css'
import chainsmokers from '../../imagess/chainsmokers.webp'
import { useDispatch, useSelector } from 'react-redux';
import { currentPlayingSongArr, isPlayinggggg, setCurrentSongObj } from 'Redux/Actions/Loginactions/loginactions';
function Home() {
  const userSongsList = useSelector((state) => state.loginreducer.songs);
  const dispatch = useDispatch();
  const [filteredSong, setFilteredSong] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cond, setCond] = useState(false);
  const [cond2, setCond2] = useState(false);
  useEffect(() => {
    console.log(searchValue, "searching")
    const debounce = setTimeout(() => findSearchSong(searchValue), 1000);
    return () => clearTimeout(debounce);
  }, [searchValue])
  const searching = (value) => {
    setSearchValue(value);
    if (value == "") {
      setCond(false);
    }
    else {
      setCond(true);
      console.log("ab")
    }
  }
  const findSearchSong = (searchValue) => {
    let filteredData = userSongsList.filter((value) => value.SongName.toLowerCase().includes(searchValue.toLowerCase()));
    if (filteredData.length !== 0) {
      setCond2(true);
      setFilteredSong(filteredData);
    }
    else {
      setCond2(false);
    }
  }
  return (
    <>
      <div className='main-container'>
        {/* <input type="search" id='searchstyle' placeholder='Search your Song here' value={searchValue} onChange={(e) => searching(e.target.value)} /> */}
       
        <div className='spotify-playlists'>
          <h2>All Songs</h2>
          <div className='spotifydiv'>
            <div className="list">

              {!cond ? ( userSongsList.map((e, i) => {
                return (

                  <div className="item" key={i}>
                    <img src={chainsmokers} alt="" />

                    <h4 style={{ color: 'white' }}>{e.SongName}</h4>
                    <i i className="fa-solid fa-play" style={{ color: 'white' }} onClick={() => {
                      dispatch(setCurrentSongObj(e));
                      dispatch(isPlayinggggg(true));
                      dispatch(currentPlayingSongArr(userSongsList));
                    }}></i>

                  </div>

                )
              })) : (cond2 ? filteredSong && filteredSong.map((e, i) => {
                return (

                  <div className="item" key={i}>
                    <img src={chainsmokers} alt="" />

                    <h4>{e.SongName}</h4>
                    < i className="fa-solid fa-play" style={{ color: 'white' }} onClick={() => {
                      dispatch(setCurrentSongObj(e));
                      dispatch(isPlayinggggg(true));
                      dispatch(currentPlayingSongArr(filteredSong));
                    }}></i>

                  </div>

                )
              }) : null)}

            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home;

