import React from 'react'

export default function index() {
    const handleOnChange = (evt) => {
        console.log(evt)
    }
    return (
        <div>
            <div className="form-group">
              <label for="">Search</label>
              <input type="text" className="form-control" onChaange={handleOnChange} name="" id="" aria-describedby="helpId" placeholder="Name"></input>
              <small id="helpId" className="form-text text-muted"></small>
            </div>
        </div>
    )
}
