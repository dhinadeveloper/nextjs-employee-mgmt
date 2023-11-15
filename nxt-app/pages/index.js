import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./common/navbar";
import EmployeeTab from "./common/employee-tab";
import { useEffect } from "react";
import locData from "./data/locData";
const inter = Inter({ subsets: ["latin"] });
import useLocStore from "./store/locStore";
export default function Index() {
  const getLocEmp = useLocStore((state)=>state.empData)
  const editLocEmp = useLocStore((state) => state.addEmp);

  useEffect(() => {
    callAPI()
        .then((data) => {
          console.log(data)
          editLocEmp(locData.data)
          console.log(getLocEmp)
        })
        .catch((err) => {
          console.log(err)
          editLocEmp(err.data)

          console.log(getLocEmp)
        });

  }, []);
  useEffect(() => {
    // Perform localStorage action
    // console.log(localStorage.getItem("empData"));
    if (
      localStorage.getItem("empData") == "undefined" ||
      localStorage.getItem("empData") == null ||
      localStorage.getItem("empData") == ""
    ) {
      callAPI()
        .then((data) => {
          localStorage.setItem("empData", JSON.stringify(data));
        })
        .catch((err) => {
          // console.log(err)
          localStorage.setItem("empData", JSON.stringify(err));
        });
    }
  }, []);

  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://dummy.restapiexample.com/api/v1/employees`
      );
      return await res.json();
    } catch (err) {
      return await locData;
    }
  };

  return (
    <>
      <Navbar />
      <EmployeeTab />
      {/* <EmployeeTab /> */}
    </>
  );
}
