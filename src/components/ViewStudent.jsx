import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewStudent = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
          (error) => {
            console.log(error.message)
            alert(error.message)
          }
        ).finally()
    } 
    useEffect(()=>{fetchData()},[])
  return (
    <div>
       <NavBar/> 
       <div className="container">
        <center><h1><b>VIEW STUDENT</b></h1></center><br />
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table" border="2">
  <thead>
    <tr>
      <th scope="col">First NAME</th>
      <th scope="col">LAST NAME</th>
      <th scope="col">COLLEGE</th>
      <th scope="col">DOB</th>
      <th scope="col">COURSE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
 {data.map(
    (value, index) => {
        return  <tbody>
        <tr>
          <td>{value.firstname}</td>
          <td>{value.lastname}</td>
          <td>{value.college}</td>
          <td>{value.dob}</td>
          <td>{value.course}</td>
          <td>{value.mobile}</td>
          <td>{value.email}</td>
          <td>{value.address}</td>
         
          
        </tr>
        
      </tbody>
    }
 )

 }
</table>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ViewStudent