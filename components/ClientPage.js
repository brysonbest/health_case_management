"use client";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "../utilities/supabaseConnection";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns = [
  { field: "clientid", headerName: "ID" },
  { field: "first_name", headerName: "First name", editable: true },
  { field: "last_name", headerName: "Last name", editable: true },
  { field: "gender", headerName: "Gender", editable: true },
  { field: "birthday", headerName: "Date of Birth", editable: true },
  { field: "city", headerName: "City", editable: true },
  { field: "indigenous", headerName: "Indigenous", editable: true },
  { field: "pwd", headerName: "PWD", editable: true },
  { field: "vet", headerName: "Veteran", editable: true },
  {
    field: "emergency_shelter",
    headerName: "Emergency Shelter",
    editable: true,
  },
  { field: "bus_pass", headerName: "Bus Pass", editable: true },
  {
    field: "clothing_supplement",
    headerName: "Clothing Supplement",
  },
  { field: "pet_deposit", headerName: "Pet Deposit" },
  { field: "pssg", headerName: "PSSG" },
  { field: "admission_status", headerName: "Admission Status" },
  { field: "deceased", headerName: "Deceased" },
  { field: "urgent", headerName: "Urgent" },
  { field: "phone_number", headerName: "Phone Number" },
  { field: "activated_account", headerName: "Activated Account" },
  { field: "created_at", headerName: "Created At" },
];

export default function ClientPage({ clientIDNumber }) {
  const router = useRouter();
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    fetchclientList();
  }, []);

  const handleRowClick = (event) => {
    const clientID = event.id;
    console.log(clientID);
    // router.push(`/${clientID}`, event);
  };

  const fetchclientList = async () => {
    // Clear clientlist
    setClientList([]);

    try {
      let { data, error } = await supabase
        .from("clients")
        .select("*")
        .eq("id", clientIDNumber);

      console.log(data, "this is what was found");

      // Handle any errors.
      if (error) {
        throw error;
      }

      // Upon a successful response, update list
      if (data) {
        setClientList(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderclientList = (clientList) => {
    if (clientList.length > 0) {
      console.log(clientList);
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: "100%" }}>
            <DataGrid
              rows={clientList}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              onRowClick={(event) => handleRowClick(event)}
              slots={{
                toolbar: GridToolbar,
              }}
              pageSizeOptions={[5, 10]}
              editMode="cell"
            />
          </Box>
        </div>
      );

      // return <pre>{JSON.stringify(clientList, null, 2)}</pre>;
      // clientList.map((item) => {
      //  <pre>{JSON.stringify(clientList, null, 2)}</pre>;
      // return (
      //   <div>{item}</div>
      // );
      // });
    } else {
      return (
        <div>
          <strong>No items!</strong>
        </div>
      );
    }
  };

  // Render the clientList component display.
  return <div>{renderclientList(clientList)}</div>;
}
