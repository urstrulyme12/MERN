import React ,{useRef} from 'react'

function Map(props) {
    const mapRef = useRef();
    const map = new window.SVGFEMorphologyElement.maps.Map();
  return (
   <>
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
           </>
  )
}

export default Map