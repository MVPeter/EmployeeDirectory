import React from 'react'

export default function Search({filter, setFilterUser}) {
    const handleOnChange = (e) => {
        setFilterUser(e.target.value)
        console.log(e.target.value)
        
    }

    return (
        <div>
            <div className="form-group mx-5">
              <label>Search</label>
              <input 
              value={filter || ''}
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
