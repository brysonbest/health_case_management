"use client";
import { useState, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "../utilities/supabaseConnection";

//primereact model

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./ClientList2.css";

const columns = [
  { field: "clientid", header: "ID" },
  { field: "first_name", header: "First name" },
  { field: "last_name", header: "Last name" },
  { field: "gender", header: "Gender" },
  { field: "birthday", header: "Date of Birth" },
  { field: "city", header: "City" },
  // { field: "indigenous", header: "Indigenous" },
  // { field: "pwd", header: "PWD" },
  // { field: "vet", header: "Veteran" },
  // { field: "emergency_shelter", header: "Emergency Shelter" },
  // { field: "bus_pass", header: "Bus Pass" },
  // {
  //   field: "clothing_supplement",
  //   header: "Clothing Supplement",
  // },
  // { field: "pet_deposit", header: "Pet Deposit" },
  // { field: "pssg", header: "PSSG" },
  // { field: "admission_status", header: "Admission Status" },
  // { field: "deceased", header: "Deceased" },
  { field: "urgent", header: "Urgent" },
  { field: "phone_number", header: "Phone Number" },
  // { field: "activated_account", header: "Activated Account" },
  // { field: "created_at", header: "Created At" },
];

export default function ClientList() {
  const router = useRouter();
  const [clientList, setClientList] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    fetchclientList();
  }, []);

  const handleRowClick = (event) => {
    const clientID = event.rowData.id;
    setSelectedCell(event);
    console.log(clientID, selectedCell, "this should be something");
    router.push(`/${clientID}`, event);
  };

  // const columns = useMemo(
  //   () =>
  //     data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
  //   [data.columns]
  // );

  const fetchclientList = async () => {
    // Clear clientlist
    setClientList([]);

    try {
      let { data, error } = await supabase.from("clients").select("*");

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
          {/*  
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
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </Box>
          */}
          <DataTable
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            value={clientList}
            tableStyle={{ minWidth: "50rem" }}
            globalFilterFields={["first_name", "last_name"]}
            emptyMessage="No customers found."
            cellSelection
            selectionMode="single"
            selection={selectedCell}
            onSelectionChange={(e) => handleRowClick(e.value)}
          >
            {columns.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} />
            ))}
          </DataTable>
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
