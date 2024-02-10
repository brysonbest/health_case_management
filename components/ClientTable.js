"use client";
import { useState, useEffect } from "react";

import { supabase } from "../utilities/supabaseConnection";

export default function ClientList() {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    fetchclientList();
  }, []);

  const fetchclientList = async () => {
    // Clear clientlist
    setClientList([]);

    try {
      let { data, error } = await supabase
        .from("clients")
        .select("*")
        .limit(20);

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
      return <pre>{JSON.stringify(clientList, null, 2)}</pre>;
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
  return (
    <div>
      <div>{renderclientList(clientList)}</div>
      <div></div>
    </div>
  );
}
