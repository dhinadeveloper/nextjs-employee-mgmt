import locData from "../data/locData";
import fetch, { Headers } from "node-fetch";
export const setLocSt = async () => {
    console.log("hi from helper")
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
  };
 
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

  export const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

