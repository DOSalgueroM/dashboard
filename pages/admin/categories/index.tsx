import React from "react";
//import TableDataCategories from "../../../components/TableDataCategories";
import { NextPage } from "next";

const Categories: NextPage = () => {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Categories</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm">
          {/* <TableDataCategories /> */}
        </div>

      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
      <h1>Hola mundo</h1>
    </>

  );
}

export default Categories;


