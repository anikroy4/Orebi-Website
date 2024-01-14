import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ listInnerItem, active, className, listLiClassName, children, href }) => {
  return (
    <li className={listLiClassName}>
      <Link to={href} className={`inline-block  text-sm font-bold font-dm w-full ${className} ${active}`} href="#">
        {listInnerItem}
      </Link>
      {children}
    </li>
  )
}

export default ListItem