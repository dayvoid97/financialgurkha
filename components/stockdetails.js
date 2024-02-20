// components/StockDetail.js
import React from 'react'
import UniquePage from 'pages/unique-page/[uniqueId]'

const StockDetail = ({ details }) => {
  // Check if details are provided
  if (!details || Object.keys(details).length === 0) {
    return <div>No stock details available.</div>
  }

  return (
    <div>
      <h1>Stock Details</h1>
      <ul>
        {Object.entries(details).map(([key, value]) => (
          <li key={key}>{`${key}: ${value}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default StockDetail

// // try3
// import React, { useEffect, useState } from 'react';
// import {parse} from 'csv-parse'; // Ensure you have csv-parse installed
// import {fs} from 'fs';
// import path from 'path';

// const StockDetails = ({ uniqueId }) => {
//   const [stockDetails, setStockDetails] = useState(null);

//   useEffect(() => {
//     const fetchStockDetails = async () => {
//       // Path to your CSV file
//       const filePath = path.join(process.cwd(), 'public', 'comp-sheet-docs', 'wrldcmpdb.csv');
//       try {
//         const csvData = fs.readFileSync(filePath, 'utf8');
//         const records = parse(csvData, { columns: true });
//         // Find the record by uniqueId. Adjust your logic as per the CSV structure.
//         const detail = records.find((record) => `${record.Exchange}:${record.Ticker}` === uniqueId);
//         setStockDetails(detail);
//       } catch (error) {
//         console.error('Error fetching stock details:', error);
//       }
//     };

//     fetchStockDetails();
//   }, [uniqueId]);

//   if (!stockDetails) {
//     return <div>Loading stock details...</div>;
//   }

//   return (
//     <div>
//       <h1>Stock Details: {uniqueId}</h1>
//       <ul>
//         {Object.entries(stockDetails).map(([key, value]) => (
//           <li key={key}>{`${key}: ${value}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StockDetails;

// try2
// import fs from 'fs';
// import path from 'path';
// import { parse } from 'csv-parse';

// export async function getServerSideProps({ params }) {
//   const { uniqueId } = params;
//   const filePath = path.join(process.cwd(), 'public', 'comp-sheet-docs', 'wrldcmpdb.csv');
//   const csvData = fs.readFileSync(filePath, 'utf8');

//   // Wrap the parse in a promise and await its resolution
//   const records = await new Promise((resolve, reject) => {
//     parse(csvData, { columns: true }, (err, output) => {
//       if (err) reject(err);
//       else resolve(output);
//     });
//   });

//   const stockDetails = records.find((record) => `${record.Exchange}:${record.Ticker}` === uniqueId);

//   // Ensure stockDetails is serializable or provide a default object
//   return { props: { stockDetails: stockDetails || {} } };
// }
// export default StockDetailPage;

// try1

// // components/StockDetails.js
// const StockDetails = ({ details }) => {
//     return (
//       <div>
//         <h1>Stock Details</h1>
//         {details && (
//           <ul>
//             {Object.entries(details).map(([key, value]) => (
//               <li key={key}>{`${key}: ${value}`}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };

//   export default StockDetails;
