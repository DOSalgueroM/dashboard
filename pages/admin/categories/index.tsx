// import React from "react";
// import TableDataCategories from "../../../components/TableDataCategories";
// import { NextPage } from "next";
// import ButtonAdd from "../../../components/ButtonAdd";
// import { SessionProvider, useSession } from 'next-auth/react';

// const Categories: NextPage = () => {
//   return (
//     <SessionProvider children={""}>
//        <>
//       <p className="text-gray-700 text-3xl mb-16 font-bold">Categories</p>
//       <div className="rounded bg-white h-20  shadow-sm flex items-center">
//         <div className="ml-auto mr-8"> {/* Utilizamos ml-auto para que el contenido se alinee a la derecha */}
//           <div className="flex justify-center">
//             <ButtonAdd/>
//           </div>
//         </div>
//       </div>
//       <div className="grid col-1 bg-white h-96 shadow-sm">
//         <TableDataCategories />
//       </div>
//     </>
//     </SessionProvider>
//   );
// }

// const CategoriesContent: React.FC = () => {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     // Muestra un loader o un mensaje de carga mientras se obtiene la sesión
//     return <div>Cargando...</div>;
//   }


//   return (
//     <>
//       <p className="text-gray-700 text-3xl mb-16 font-bold">Categories</p>
//       <div className="rounded bg-white h-20  shadow-sm flex items-center">
//         <div className="ml-auto mr-8"> {/* Utilizamos ml-auto para que el contenido se alinee a la derecha */}
//           <div className="flex justify-center">
//             <ButtonAdd/>
//           </div>
//         </div>
//       </div>
//       <div className="grid col-1 bg-white h-96 shadow-sm">
//         <TableDataCategories />
//       </div>
//     </>
//   );
// }

// export default Categories;


import React from "react";
import TableDataCategories from "../../../components/TableDataCategories";
import { NextPage } from "next";
import ButtonAdd from "../../../components/ButtonAdd";

const Categories: NextPage = () => {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Categories</p>
        
          <div className="rounded bg-white h-20  shadow-sm flex items-center">
          
            <div className="ml-auto mr-8"> {/* Utilizamos ml-auto para que el contenido se alinee a la derecha */}
            <div className="flex justify-center">
              <ButtonAdd/>
            </div>
          </div>
        </div>
        
        
      
      <div className="grid col-1 bg-white h-96 shadow-sm">
       
      <TableDataCategories />
      </div>
    
    </>

  );
}

export default Categories;


