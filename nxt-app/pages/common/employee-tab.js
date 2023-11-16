import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useRouter } from "next/router";
import Link from "next/link";
import EmployeeAdd from "../employee/employee-add";
import EmployeeEdit from "../employee/employee-edit";
import EmployeeList from "../employee/employee-list";
export default function EmployeeTab() {
  const router = useRouter();
  // console.log(router.asPath.slice(2));
  const [value, setValue] = React.useState("add");
  const handleRouteChange = (event, newValue) => {
    console.log("hi");
  };
  React.useEffect(() => {
    setValue(router.asPath.slice(19) == "" ? "list" : router.asPath.slice(19));
    // const item = localStorage.getItem('url')
    // if(item!=null)
    // {

    //   // console.log(item.slice(2))
    //   setValue(item.slice(2))
    // }
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab
              label="Add"
              href="/employee/employee-add"
              value="add"
              component={Link}
            />
            <Tab
              label="Edit"
              href="/employee/employee-edit"
              value="edit"
              component={Link}
            />
            <Tab
              label="List"
              href="/employee/employee-list"
              value="list"
              component={Link}
            />
          </TabList>
        </Box>
        {/* {props.children} */}
        <TabPanel value="add">{/* <EmployeeAdd /> */}</TabPanel>
        <TabPanel value="edit">{/* <EmployeeEdit /> */}</TabPanel>
        <TabPanel value="list">{/* <EmployeeList /> */}</TabPanel>
      </TabContext>
    </Box>
  );
}
