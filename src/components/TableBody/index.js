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
      <td scope="row">
          <div className="img-container">
            <img alt={fname} src={image} />
          </div>
        </td>
        <td>
          {fname} {lname}
        </td>
        <td>
          {phone}
        </td>
        <td>
          {email}
        </td>
        <td>
          {state}
        </td>


      </tr>
    
  )
}

