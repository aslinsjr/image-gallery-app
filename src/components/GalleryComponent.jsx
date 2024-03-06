
import './GalleryComponent.css'

const GalleryComponent = ( {photoArray, handleClick} ) => {
  
  return (
    <div>
      <div className="header">
        <h2>Image Gallery</h2>
      </div>
      <div className='image-gallery'>
        {photoArray.map((photoItem, index) => {
        return (
          <div key={index} >
            <img className='image' id={photoItem.id} onClick={(e) => handleClick(e)} src={photoItem.download_url.replace(/(\d{4}).(\d{4})$/, "400/266")} alt={`image_${photoItem.id}`} />
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default GalleryComponent