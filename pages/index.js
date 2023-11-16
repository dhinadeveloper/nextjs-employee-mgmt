import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./common/navbar";
import EmployeeTab from "./common/employee-tab";
import { useEffect } from "react";
import locData from "./data/locData";
const inter = Inter({ subsets: ["latin"] });
import useLocStore from "./store/locStore";
import EmployeeList from "./employee/employee-list";
import * as Helper from "./helper/helper"
export default function Index(){
  Helper.setLocSt().then((data)=>{
    
  })
  return (
    <>
      {/* <EmployeeTab /> */}
    </>
  );
}
