import React from 'react'

export default function index({search}) {
    const handleOnChange = (evt) => {
        console.log(evt.target.value)
    }


    return (
        <div>
            <div className="form-group mx-5">
              <label>Search</label>
              <input 
              style={{width: "300px"}}
              type="text" 
              className="form-control" 
              onChange={handleOnChange} 
              name="" id="" 
              aria-describedby="helpId" 
              placeholder="Name"
              >    
              </input>
              <small id="helpId" className="form-text text-muted"></small>
            </div>
        </div>
    )
}
