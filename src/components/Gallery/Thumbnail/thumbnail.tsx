import "./thumbnail.css"

function Thumbnail({title, imgPath, altImg, link}: ThumbnailData) {
  return (
    <div className='gallery-thumbnail'>
        <a href={link}>
            <img src={imgPath} alt={altImg}/>
        </a>
        {title && <h3>{title}</h3> }
    </div>
  )
}

export default Thumbnail