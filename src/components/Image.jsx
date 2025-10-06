import React from 'react'

const Image = ({src, alt, className}) => {
  return (
    <img src={src} loading='lazy' alt={alt} className={`${className}`} />
  )
}

export default Image