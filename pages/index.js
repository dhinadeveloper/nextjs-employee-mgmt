import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./common/navbar";
import EmployeeTab from "./common/employee-tab";
import React, { useEffect } from "react";
import locData from "./data/locData";
const inter = Inter({ subsets: ["latin"] });
import useLocStore from "./store/locStore";
import EmployeeList from "./employee/employee-list";
import * as Helper from "./helper/helper"
import { useRouter } from "next/navigation";
export default function Index(){
  const router = useRouter()

  React.useEffect(()=>{
    Helper.setLocSt().then((data)=>{
        router.push('/employee/employee-add')
    })
  })
  return (
    <>
      {/* <EmployeeTab /> */}
    </>
  );
}
