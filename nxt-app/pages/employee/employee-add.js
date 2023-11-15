import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Router } from 'next/router';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Home from '..';
export default function EmployeeAdd() {
  const [name, setName] = React.useState('1');

  const [salary, setSalary] = React.useState('1');

  const [age, setAge] = React.useState('1');

  const [image, setImage] = React.useState('1');

  const handleNameChange = (event, newValue) => {
    // console.log(event.target.value  )
    setName(event.target.value);
  };
  const handleSalaryChange = (event, newValue) => {
    // console.log(event.target.value  )
    setSalary(event.target.value);
  };
  const handleAgeChange = (event, newValue) => {
    // console.log(event.target.value  )
    setAge(event.target.value);
  };
  const handleImageChange = (event, newValue) => {
    // console.log(event.target.value  )
    setImage(event.target.value);
  };
  const handleClick = (event, newValue) => {
    // console.log(event.target.value  )
    var data = JSON.parse(localStorage.getItem('empData'))
    console.log(data)
    var len = parseInt(data.data[data.data.length-1].id)+1
    var json ={
      "id":len,
      "employee_name":name,
      "employee_salary":salary,
      "employee_age":age,
      "employee_image":image
    }
    data.data.push(json)
    localStorage.setItem('empData',JSON.stringify(data))
  };

  return (
    <div >
      <Home/>
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Name" variant="outlined" onBlur={handleNameChange}/>
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Salary" variant="outlined" onBlur={handleSalaryChange}/>
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Age" variant="outlined" onBlur={handleAgeChange} />
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Image" variant="outlined" onBlur={handleImageChange} />
       <Button variant="outlined" onClick={handleClick}>Submit</Button>
    </div>
  );
}