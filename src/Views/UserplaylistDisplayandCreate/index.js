import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  collection, arrayUnion,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  setDoc
} from "firebase/firestore";
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import likedicon from '../../imagess2/likedicon.png'
import maxresdefault from '../../imagess/maxresdefault.jpg'
import "./App.css"
import { NavLink } from 'react-router-dom';
import Player from 'Views/Player/Player';
import { useRef } from 'react';
import Home from 'Views/Playlist/Playlist';
// import { useParams } from 'react-router-dom';
const Userplaylistdisplayandcreate = () => {
  const params = useParams();
  const audioElem = useRef();
  const { name } = params;
  console.log(name, "playlistname")
  const uid = useSelector((state) => state.loginreducer.loggedin);
  const [songdata, setSongData] = useState([]);
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlistname, setPlaylist] = useState("");
  const [playlistsongs, setPlaylistSongs] = useState([]);
  const [seekbar, setSeekbar] = useState(false);
  const [playingPlaylistSongs, setP] = useState(false);

  useEffect(() => {
    setPlaylist(name);
    console.log(useState, "usertoken");
    const getsongslist = collection(db, "songslist",);
    getDocs(getsongslist)
      .then((response) => {
        const songsarray = response.docs.map((doc) => {
          return (doc.data());

        });
        console.log(songsarray, "vikas")
        setSongData(songsarray);
        console.log("Songsssss", songdata);

      })
      .catch((error) => {
        console.log(error);
      });
    playlist();
  }, [])

  async function addtoLikedSongs(songname) {
    console.log(songname, "songname")
    await updateDoc(doc(db, "users", uid), {
      ["LikedSongs"]: arrayUnion(songname)
    });
  }

  async function setSongs(id) {
    const filterele = songdata.find((e) => {
      console.log(e, "eeeee");
      return e.SongUrl == id;
    })
    await updateDoc(doc(db, "users", uid), {
      ["playlist" + ["." + `${playlistname}`]]: arrayUnion(filterele)
    });
    playlist();
  }
  async function playlist() {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const getplaylistdata = docSnap.data().playlist[name];
    console.log("getplaylist", getplaylistdata)

    setPlaylistSongs(getplaylistdata);
    console.log(playlistname, "tttt");

  }
  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  }

  return (
    <>
      <audio src={currentSong?.SongUrl} ref={audioElem} onTimeUpdate={onPlaying} />
      <div className='main-container'>
        <div className="input-group rounded">
        </div>
        <div className='spotify-playlists'>
          <h2>{name}</h2>
          <div className='spotifydiv'>
            <div className="list">
              {playlistsongs?.map((e) => {
                return (
                  <>
                    <div className="item">
                      <img src={maxresdefault} alt="" />

                      <h4>Today's Top Hits</h4>
                      <span >{e.SongName}</span>
                      <button style={{ backgroundColor: 'grey' }} onClick={() => {
                        setCurrentSong(e);
                        setIsPlaying(!isPlaying);
                        setSeekbar(true);
                        setP(true);
                      }}>click</button>
                    </div>

                  </>)
              })}
            </div>
          </div>
        </div>
        <>
          {<div className='main-container'>
            <div className='spotify-playlists'>
              <h2>All Songs</h2>
              <div className='spotifydiv'>
                <div className="list">

                  {songdata.map((e) => {
                    console.log(currentSong, "ram");
                    return (
                      <>

                        <div className="item">
                          <img src={maxresdefault} alt="" />

                          <h4>{e.SongName}</h4>
                          <button id={e.SongUrl} style={{ backgroundColor: 'grey' }} onClick={(e) => {

                            console.log(e.target.id, "btn")
                            setSongs(e.target.id)
                          }}>
                            Add

                          </button>
                          <button onClick={() => {
                            addtoLikedSongs(e.SongName);
                          }}>
                            <img src={likedicon} id="hearticon" alt="" />
                          </button>
                          <button onClick={() => {
                            setCurrentSong(e);
                            setIsPlaying(!isPlaying);
                            setSeekbar(true);
                            setP(false);
                          }}>click</button>
                        </div>
                      </>)
                  })}

                </div>
              </div>
            </div>
            {<Player songdata={playingPlaylistSongs ? playlistsongs : songdata} setSongData={playingPlaylistSongs?setPlaylistSongs:setP} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElem={audioElem} seekbar={seekbar} setSeekbar={setSeekbar} /> }
          </div>}

        </>



      </div>

    </>

  )
}

export default Userplaylistdisplayandcreate

