import React from "react";
import TableDataCategories from "../../../components/TableDataCategories";
import { NextPage } from "next";

const Categories: NextPage = () => {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Categories</p>

        <div className="rounded bg-white h-40 shadow-sm">
          
        </div>

      
      <div className="grid col-1 bg-white h-96 shadow-sm">
      <TableDataCategories />
      </div>
    
    </>

  );
}

export default Categories;


