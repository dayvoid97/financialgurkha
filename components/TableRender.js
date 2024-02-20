import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// const handleExploreClick = () => {
//   const uniqueId = Math.floor(Math.random() * 1000000); // Generates a random number
//   navigate(`/unique-page/${uniqueId}`); // Programmatic navigation to the unique page
// };

const CSVTable = () => {
  const router = useRouter()
  const handleExploreClick = (rowData) => {
    const rowDataSerialized = encodeURIComponent(JSON.stringify(rowData))
    router.push(`/unique-page/${rowDataSerialized}`)
  }

  const [tableData, setTableData] = useState([])
  const [typedValue, setTypedValue] = useState('') // for holding the search input
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTableData, setFilteredTableData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const columnName = 'Country' // This is the column we're searching in

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTerm(typedValue)
    }, 500)
    return () => clearTimeout(timerId) // Cleanup the timeout on component unmount or when typedValue changes
  }, [typedValue])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/comp-sheet-docs/wrldcmpdb.csv')
        const csvData = await response.text()
        const parsedData = parseCSV(csvData)
        setTableData(parsedData)
      } catch (error) {
        console.error('Failed to fetch or parse CSV', error)
        // Handle error appropriately in your UI
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filterData = () => {
      if (searchTerm.trim() === '') {
        setFilteredTableData(null)
      } else {
        const newFilteredTableData = tableData.filter((row) =>
          row[tableData[0].indexOf(columnName)].toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTableData(newFilteredTableData)
      }
    }
    filterData()
  }, [searchTerm, tableData, columnName])

  // Function to parse CSV data
  const parseCSV = (csvData) => {
    // Split CSV into rows and then cells
    return csvData.split('\n').map((row) => row.split(','))
  }
  // styling components
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    th: {
      textAlign: 'left',
      padding: '8px',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#f2f2f2',
      color: '#333'
    },
    td: {
      textAlign: 'left',
      padding: '8px',
      borderBottom: '1px solid #ddd'
    },
    tr: {
      '&:nth-child(even)': {
        backgroundColor: '#f9f9f9'
      },
      exploreButton: {
        cursor: 'pointer',
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder={`Search in any ${columnName}...`}
        value={typedValue}
        onChange={(e) => setTypedValue(e.target.value)}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : searchTerm && filteredTableData && filteredTableData.length === 0 ? (
        <p id="error">Apologies. No matching stock entry found in our database..</p>
      ) : filteredTableData ? (
        <table style={styles.table}>
          <thead>
            <tr style={styles.tr}>
              {tableData.length > 0 &&
                tableData[0].map((header, index) => (
                  <th key={index} style={styles.th}>
                    {header}
                  </th>
                ))}
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                style={
                  rowIndex % 2 === 0 ? { ...styles.tr, backgroundColor: '#f9f9f9' } : styles.tr
                }
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={styles.td}>
                    {cell}
                  </td>
                ))}
                <td style={styles.td}>
                  <button style={styles.exploreButton} onClick={() => handleExploreClick(row[1])}>
                    + Explore
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}

export default CSVTable
