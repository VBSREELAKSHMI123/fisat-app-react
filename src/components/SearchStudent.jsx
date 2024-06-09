import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    const [data,setData]=useState(
        {
            "search":""
        }
    )
    const inputHandler=(event)=>
        {
            setData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>{
            console.log(data)
        }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <center><h1><b>SEARCH STUDENT</b></h1></center>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" name='search' value={data.search} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center>
                        <button className="btn btn-secondary" onClick={readValue}>SEARCH</button>
                    </center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent