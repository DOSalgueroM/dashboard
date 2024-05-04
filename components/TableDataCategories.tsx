// import React from "react";
// import { User, Tooltip } from "@headlessui/react";
// import { EditIcon } from "./EditIcon";
// import { DeleteIcon } from "./DeleteIcon";
// import { EyeIcon } from "./EyeIcon";
// import { columns, users } from "./data";
// import Chip from "@headlessui/react/dist/components/chip";

// const statusColorMap: Record<string, string> = {
//   active: "bg-green-500",
//   paused: "bg-red-500",
//   vacation: "bg-yellow-500",
// };

// type User = typeof users[0];

// export default function TableDataCategories() {
//   const renderCell = React.useCallback((user: User, columnKey: keyof User) => {
//     const cellValue = user[columnKey];

//     switch (columnKey) {
//       case "name":
//         return (
//           <User className="flex items-center space-x-2">
//             <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
//             <div>
//               <p className="font-medium">{cellValue}</p>
//               <p className="text-sm text-gray-500">{user.email}</p>
//             </div>
//           </User>
//         );

//       case "status":
//         return (
//           <Chip className={`capitalize ${statusColorMap[cellValue]} text-white`} size="sm">
//             {cellValue}
//           </Chip>
//         );

//       case "actions":
//         return (
//           <div className="flex items-center space-x-2">
//             <Tooltip content="Details">
//               <span className="text-lg text-gray-400 cursor-pointer hover:text-gray-600">
//                 <EyeIcon />
//               </span>
//             </Tooltip>
//             <Tooltip content="Edit user">
//               <span className="text-lg text-gray-400 cursor-pointer hover:text-gray-600">
//                 <EditIcon />
//               </span>
//             </Tooltip>
//             <Tooltip content="Delete user">
//               <span className="text-lg text-red-500 cursor-pointer hover:text-red-600">
//                 <DeleteIcon />
//               </span>
//             </Tooltip>
//           </div>
//         );

//       default:
//         return cellValue;
//     }
//   }, []);

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             {columns.map((column) => (
//               <th
//                 key={column.uid}
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 {column.name}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {users.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-50">
//               {columns.map((column) => (
//                 <td key={column.uid} className="px-6 py-4 whitespace-nowrap">
//                   {renderCell(item, column.uid)}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
