import React from 'react'

export default function GlobalFilter({ filter, setfilter }) {
    const handleOnChange = (e) => {
        setfilter(e.target.value)
        console.log(e.target.value)
    }
    
    return (
        <span>
        <div className="form-group mx-5">
            Search: {' '}
            <input value={filter || ''}
                style={{ width: "300px" }}
                type="text"
                onChange={handleOnChange}
                aria-describedby="helpId"
                placeholder="Name"
            >
            </input>
        </div>
        </span>
    )
}
