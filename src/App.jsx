import { useState, useEffect } from 'react'

import GalleryComponent from './components/GalleryComponent'
import ShowComponent from './components/ShowComponent'

import './App.css'
import axios from 'axios'

function App() {
  const [photoArray, setPhotoArray] = useState([])
  const [photoId, setPhotoId] = useState("")

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
    .then(function(response) {
      setPhotoArray(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
  }, [])

  const handleClick = (e) => {
    setPhotoId(e.target.id)
  }

  const returnGallery = () => {
    setPhotoId("")
  }

  return (
    <div className={photoId === "" ? 'container' : 'container show-image'}>
      <GalleryComponent photoArray={photoArray} handleClick={handleClick}/>
      {photoId === "" ? <div></div> : <ShowComponent photoId={photoId} returnGallery={returnGallery}/>}
    </div>
  )
}

export default App
