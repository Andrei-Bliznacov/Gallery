import React from 'react'

function Photos({link,alt}) {
  return (
    <>
        <img  alt={alt} src={link}/>
    </>
  )
}

export default Photos