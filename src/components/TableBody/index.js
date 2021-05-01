import React from 'react'

export default function TableBody({
  image, 
  fname, 
  lname, 
  email, 
  phone, 
  state}
  ) {
  return (
    
      <tr>
      <td>
          <div className="img-container">
            <img alt={fname} src={image} />
          </div>
        </td>
        <td key={'fullname'}>
          {fname} {lname}
        </td>
        <td key={'phone'}>
          {phone}
        </td>
        <td key={'email'}>
          {email}
        </td>
        <td key={'state'}>
          {state}
        </td>


      </tr>
    
  )
}

