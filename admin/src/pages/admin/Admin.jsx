import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Addproducts } from "../../components/addProduct/Addproducts";
import { Listproducts } from "../../components/listProduct/Listproducts";

export const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/addproduct" element={<Addproducts />} />
          <Route path="/listproduct" element={<Listproducts />} />
        </Routes>
      </div>
    </div>
  );
};
