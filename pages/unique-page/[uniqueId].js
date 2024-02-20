// try7
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const UniqueStockDetails = () => {
  const router = useRouter()
  const { uniqueId } = router.query
  // router.query brings a string from another script
  const [isLoading, setIsLoading] = useState(false)
  const [filteredTableData, setFilteredTableData] = useState(null)

  // Basic CSV parsing logic
  const parseCSV = (csvData) => {
    return csvData.split('\n').map((row) => {
      const columns = row.split(',')
      return columns.reduce((acc, curr, index) => {
        // Assuming the first row contains column headers
        acc[`column${index}`] = curr
        return acc
      }, {})
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        console.log(typeof uniqueId)
        // this is the csv data file
        const response = await fetch('/comp-sheet-docs/wrldcmpdb.csv')
        const csvData = await response.text()
        const parsedData = parseCSV(csvData)
        const matchingRow = parsedData.find(
          (row) => row.column1?.trim().toLowerCase() === uniqueId.trim().toLowerCase()
        )
        console.log(matchingRow)

        // Assuming column5 holds the unique identifier
        const filteredData = parsedData.filter((row) => row[1] === uniqueId)
        console.log(filteredData)
        setFilteredTableData(filteredData)
        // const matchingRow = parsedData.find(row => row.column5?.trim().toLowerCase() === uniqueId.trim().toLowerCase());

        // if (filteredData) {

        // } else {
        //   setFilteredTableData(null);
        // }
      } catch (error) {
        console.error('Failed to fetch or parse CSV', error)
        setFilteredTableData(null)
      }
      setIsLoading(false)
    }
    if (uniqueId) {
      fetchData()
    }
  }, [uniqueId])
  return (
    <div>
      <h1>Stock Details for: {uniqueId}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredTableData ? (
        <div>
          {/* Dynamically render stock details based on filteredTableData */}
          {Object.entries(filteredTableData).map(([key, value]) => (
            <p key={key}>{`${key}: ${value}`}</p>
          ))}
        </div>
      ) : (
        <p>No matching stock entry found.</p>
      )}
    </div>
  )
}

export default UniqueStockDetails

// try4
// pages/unique-page/[uniqueId].js
// TASKS FOR TODAY
// import the csv file again
// take the uniqueId as the entity of reference
// display the details of the UniqueId

// create a dictionary to store all details of the particular UniqueId
// try6
// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';

// const UniqueStockDetails = () => {
//   const router = useRouter();
//   const { uniqueId } = router.query;
//   const [isLoading, setIsLoading] = useState(false);
//   const [filteredTableData, setFilteredTableData] = useState(null);

//   // // Basic CSV parsing logic
//   // const parseCSV = (csvData) => {
//   //   return csvData.split('\n').map(row => {
//   //     const columns = row.split(',');
//   //     return columns.reduce((acc, curr, index) => {
//   //       // Assuming the first row contains column headers
//   //       acc[`column${index}`] = curr;
//   //       return acc;
//   //     }, {});
//   //   });
//   // };

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch('/comp-sheet-docs/wrldcmpdb.csv');
//         const csvData = await response.text();
//         const parsedData = parseCSV(csvData);
//         console.log(csvData)
//         // Assuming column5 holds the unique identifier
//         const matchingRow = parsedData.find(row => row.column5?.trim().toLowerCase() === uniqueId.trim().toLowerCase());
//         console.log('this is the',matchingRow)
//         if (matchingRow) {
//           setFilteredTableData({ ...matchingRow });
//           console.log(matchingRow);
//         } else {
//           setFilteredTableData(null);
//         }
//       } catch (error) {
//         console.error('Failed to fetch or parse CSV', error);
//         setFilteredTableData(null);
//       }
//       setIsLoading(false);
//     };
//     if (uniqueId) {
//       fetchData();
//       console.log(uniqueId)
//       console.log(filteredTableData);

//     }
//   }, [filteredTableData]);

//   return (
//     <div>
//       <h1>Stock Details for: {uniqueId}</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : filteredTableData ? (
//         <div>
//           {/* Dynamically render stock details based on filteredTableData */}
//           {Object.entries(filteredTableData).map(([key, value]) => (
//             <p key={key}>{`${key}: ${value}`}</p>
//           ))}
//         </div>
//       ) : (
//         <p>No matching stock entry found.</p>
//       )}
//     </div>
//   );
// };

// export default UniqueStockDetails;

// try5
// import { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react'

// const uniqueStockdetails=()=>{
//   uniqueStockData = {};

//     const router = useRouter();
//     const { uniqueId } = router.query;

//   useEffect(() => {
//     const fetchData = async () => {
//     setIsLoading(true)
//       try {
//         const response = await fetch('/comp-sheet-docs/wrldcmpdb.csv')
//         const csvData = await response.text()
//         const parsedData = parseCSV(csvData)
//         setTableData(parsedData)
//       } catch (error) {
//       console.error('Failed to fetch or parse CSV', error)
//       // Handle error appropriately in your UI
//     }
//     setIsLoading(false)
//   }
//   fetchData()
// }, [])

// useEffect(() => {
//   // Assuming uniqueId is the identifier of the row we're searching for,
//   // and columnName specifies which column should match the uniqueId.
//   const findAndSetFilteredData = () => {
//     if (!uniqueId.trim()) {
//       setFilteredTableData(null);
//     } else {
//       // Find the row that matches the uniqueId.
//       const matchingRow = parsedData.find(row => row[columnName]?.toLowerCase() === uniqueId.toLowerCase());

//       if (matchingRow) {
//         // If a matching row is found, set it as an array for consistency with the expected data structure.
//         uniqueStockData = { ...matchingRow };
//         setFilteredTableData(uniqueStockData);

//       } else {
//         // If no matching row is found, set filtered data to null or an empty array.
//         setFilteredTableData(null);
//       }
//     }
//   };

//   findAndSetFilteredData();
// }, [uniqueId,uniqueStockData]);

//   // Use `uniqueId` to fetch stock details...

// return (
//     <div>
//       <h1>Stock Details for: {uniqueId}</h1>
//       <p>{uniqueStockData}</p>

//       {/* Display the stock details */}
//     </div>
//   );
// }
// export default uniqueStockdetails;

// // try3
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// const UniquePage = () => {
//   const router = useRouter();
//   const [stockDetails, setStockDetails] = useState(null);

//   useEffect(() => {
//     if (router.query.stockData) {
//       const rowData = JSON.parse(decodeURIComponent(router.query.stockData));
//       setStockDetails(rowData);
//     }
//   }, [router.query]);

//   if (!stockDetails) return <div>Loading...</div>;

// };
// export default UniquePage

// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// const UniquePage = () => {
//   const router = useRouter();
//   const [stockDetails, setStockDetails] = useState(null);

//   useEffect(() => {
//     if (router.query.stockData) {
//       const rowData = JSON.parse(decodeURIComponent(router.query.stockData));
//       setStockDetails(rowData);
//     }
//   }, [router.query]);

//   if (!stockDetails) return <div>Loading...</div>;

// const UniquePage = ({ stockDetails }) => {
//   return <StockDetail details={stockDetails} />;

// };
// export default

// try4
// import React from 'react';

// import { promises as fs } from 'fs-extra';
// import path from 'path';
// import { parse } from 'csv-parse';

// export async function getServerSideProps({ params }) {
//   const { uniqueId } = params;
//   const filePath = path.join(process.cwd(), 'public', 'comp-sheet-docs', 'wrldcmpdb.csv');

//   // Read the file content asynchronously
//   const csvData = await fs.readFile(filePath, 'utf8');

//   // Wrap csv-parse in a promise to use it asynchronously
//   const records = await new Promise((resolve, reject) => {
//     parse(csvData, {
//       columns: true,
//       trim: true,
//     }, (err, output) => {
//       if (err) reject(err);
//       else resolve(output);
//     });
//   });

//   // Find the stock details
//   const stockDetails = records.find((record) => `${record.Exchange}:${record.Ticker}` === uniqueId) || {};

//   return { props: { stockDetails } };
// }

// // try3
// import React from 'react';
// import { useRouter } from 'next/router';
// import StockDetails from '../../components/StockDetails'; // Adjust the import path as needed

// const UniquePage = () => {
//   const router = useRouter();
//   const { uniqueId } = router.query;

//   return (
//     <div>
//       <StockDetails uniqueId={uniqueId} />
//     </div>
//   );
// };

// export default UniquePage;

// try2
// import React from "react";
// import StockDetailPage from "@/components/stockdetails";
// const UniquePage = ({ stockDetails }) => {
//   return (
//     <div>
//       <StockDetails details={stockDetails} />
//     </div>
//   );
// };

// export async function getServerSideProps({ params }) {
//   // Your server-side logic here...
//   return { props: { stockDetails: {} } }; // Ensure you're returning an object with a props key.
// }

// export default UniquePage; // This is crucial. It must be a default export.

// try1
// // pages/unique-page/[uniqueId].js
// import { useRouter } from 'next/router';

// const StockDetailPage = () => {
//   const router = useRouter();
//   const { uniqueId } = router.query;

//   // Use `uniqueId` to fetch stock details...

//   return (
//     <div>
//       <h1>Market Insights for  {uniqueId}</h1>
//       {/* Display the stock details */}
//     </div>
//   );
// };

// export default StockDetailPage;
