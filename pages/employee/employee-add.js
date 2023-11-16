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
import EmployeeTab from '../common/employee-tab';
import Image from 'next/image';
import * as Helper from '../helper/helper'
export default function EmployeeAdd() {
  const [name, setName] = React.useState('');

  const [salary, setSalary] = React.useState('');

  const [age, setAge] = React.useState('');

  const [image, setImage] = React.useState('');

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
      "profile_image":image
    }
    data.data.push(json)
    localStorage.setItem('empData',JSON.stringify(data))
  };
  const [file, setFile] = React.useState(null);



  // When the file is selected, set the file state
  const onFileChange = async (e) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
    // Convert the file to base64
    const img = await Helper.toBase64(e.target.files[0]);
    setImage(img);
  };

  // On click, clear the input value
  const onClick = (e) => {
    e.currentTarget.value = "";
  };
  return (
    <div>
    <EmployeeTab />
    <Box sx={{ mx: 4, my: 2 }}>
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Name" variant="outlined" onBlur={handleNameChange}/>
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Salary" variant="outlined" onBlur={handleSalaryChange}/>
       <TextField sx={{my:2}} fullWidth id="outlined-basic" label="Age" variant="outlined" onBlur={handleAgeChange} />
       <span>
          {image && (
            <Image src={image} width={150} height={150} alt="Uploaded Image" />
          )}
          <input
            className="my-3 inline text-gray-800 text-sm file:mr-4 file:px-4 file:py-2 file:text-sm file:border-1 file:border-solid file:border-[#94bfea]
          file:rounded file:font-medium file:text-[#3285d7] file:bg-white hover:file:bg-blue-50 hover:file:cursor-pointer"
            type="file"
            name="avatar"
            accept="image/*"
            onChange={onFileChange}
            onClick={onClick}
          />
        </span>

       <Button variant="outlined" onClick={handleClick}>Submit</Button></Box>
    </div>
  );
}