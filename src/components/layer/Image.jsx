import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({ src, href, alt, className }) => {
  return (
    <div>
      <Link to={href}>
        <picture>
          <img className={className} src={src} alt={alt} />
        </picture>
      </Link>
    </div>

  )
}

export default Image