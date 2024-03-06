import './ShowComponent.css'

import { useState } from 'react'

const ShowComponent = ({photoId, returnGallery}) => {

  const [loadedImg, setLoadedImg] = useState("loader.gif")
  const [srcId, setSrcId] = useState(photoId)

  function imageChange() {
    setLoadedImg(`https://picsum.photos/id/${srcId}/4000/2666.jpg`)
  }

  const handleNavegation = (e) => {
    
    if(e.target.className.includes("right")) {
      setSrcId(+srcId + 1)
    }

    if(e.target.className.includes("left")) {
      setSrcId(+srcId - 1)
    }
  }

  return (
    <div className='show-container'>
      <div className="show-image-box">
        <img id='show-image' src={srcId === photoId ? loadedImg : `https://picsum.photos/id/${srcId}/4000/2666.jpg`} alt="Photo Image" onLoad={() => imageChange()}/>
        <div className="show-menu">
          <i className="bi bi-house" onClick={() => returnGallery()}></i>
          <i className="bi bi-arrow-right" onClick={(e) => handleNavegation(e)}></i>
          <i className="bi bi-arrow-left" onClick={(e) => handleNavegation(e)}></i>
        </div>
      </div>
    </div>
  )
}

export default ShowComponent