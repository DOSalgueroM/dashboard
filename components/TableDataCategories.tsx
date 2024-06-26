
import axios from "axios";
//import { log } from "console";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';


function TableDataCategories() {
  const [categoria, setCategoria] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Obtener el token de acceso del localStorage
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          console.error('No hay token de acceso disponible');
          return;
        }

        // Hacer la solicitud al backend con el token de acceso
        const response = await axios.get(
          'http://localhost:4000/api/v1/categories',
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );

        // Actualizar el estado con las categorías recibidas
        setCategoria(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Llamar a la función para obtener las categorías al montar el componente
    fetchCategories();
  }, []); // No se necesita una dependencia ya que solo se ejecuta una vez
  return (

    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">


      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-16 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {categoria.map((item) => (
            <tr key={item.name} className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">

                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{item.name}</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              {/* <td className="px-6 py-4">
                          <div className="flex gap-2">
                              
                              
                          </div>
                      </td> */}
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <a x-data="{ tooltip: 'Delete' }" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </a>
                  <a x-data="{ tooltip: 'Edite' }" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
     
  );
};

export default TableDataCategories;

// // function TableDataCategories() {
// //   const [categoria, setCategoria] = useState([]);
// //   const { data:session } = useSession();

// //   useEffect(() => {
// //       const fetchCategories = async () => {
// //           try {
// //               if (!session?.accessToken) {
// //                   console.error('No hay token de acceso disponible');
// //                   return;
// //               }
// //               const response = await axios.get('http://localhost:4000/api/v1/categories', {
// //                   headers: {
// //                       'Authorization': `Bearer ${session.accessToken}`
// //                   }
// //               });
// //               console.log(response.data);
// //               setCategoria(response.data.data);
// //           } catch (error) {
// //               console.error('Error fetching products:', error);
// //           }
// //       };

// //       fetchCategories();
// //   }, [session]);


// function TableDataCategories() {
//   const [categoria, setCategoria] = useState([]);
//   const { data:session } = useSession();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         if (!session?.accessToken) {
//           console.error('No hay token de acceso disponible');
//           return;
//         }

//         const response = await axios.get(
//           'http://localhost:4000/api/v1/categories',
//           {
//             headers: {
//               'Authorization': `Bearer ${session.accessToken}`
//             }
//           }
//         );

//         setCategoria(response.data.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     if (typeof window !== 'undefined') { // Verifica si estamos en el navegador
//       fetchCategories();
//     }
//   }, [session]);