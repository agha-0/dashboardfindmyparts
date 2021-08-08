// import React, { Fragment } from "react";
// // import differenceBy from "lodash/differenceBy";
// // import { toast } from "react-toastify";
// // import DataTable from "react-data-table-component";
// // import { tableData } from "../../data/dummyTableData";
// import {
//   useTable,
//   useFilters,
//   useGlobalFilter,
//   useAsyncDebounce,
//   usePagination,
// } from "react-table";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
// } from "reactstrap";
// import { Link } from "react-router-dom";

// // Define a default UI for filtering
// function GlobalFilter({
//   preGlobalFilteredRows,
//   globalFilter,
//   setGlobalFilter,
// }) {
//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = React.useState(globalFilter);
//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   }, 200);

//   return (
//     <span>
//       Search:{" "}
//       <input
//         className="form-control"
//         value={value || ""}
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//         placeholder={`${count} records...`}
//       />
//     </span>
//   );
// }

// function DefaultColumnFilter({
//   column: { filterValue, preFilteredRows, setFilter },
// }) {
//   const count = preFilteredRows.length;

//   return (
//     <input
//       className="form-control"
//       value={filterValue || ""}
//       onChange={(e) => {
//         setFilter(e.target.value || undefined);
//       }}
//       placeholder={`Search ${count} records...`}
//     />
//   );
// }

// function Table({ columns, data }) {
//   const defaultColumn = React.useMemo(
//     () => ({
//       // Default Filter UI
//       Filter: DefaultColumnFilter,
//     }),
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     page,
//     previousPage,
//     nextPage,
//     pageOptions,
//     canPreviousPage,
//     pageCount,
//     gotoPage,
//     canNextPage,
//     setPageSize,
//     prepareRow,
//     state,
//     preGlobalFilteredRows,
//     setGlobalFilter,
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 2 },
//       defaultColumn,
//     },
//     useFilters,
//     useGlobalFilter,
//     usePagination
//   );

//   return (
//     <div>
//       <pre>
//         <code>
//           {JSON.stringify(
//             {
//               pageIndex,
//               pageSize,
//               pageCount,
//               canNextPage,
//               canPreviousPage,
//             },
//             null,
//             2
//           )}
//         </code>
//       </pre>
//       <GlobalFilter
//         preGlobalFilteredRows={preGlobalFilteredRows}
//         globalFilter={state.globalFilter}
//         setGlobalFilter={setGlobalFilter}
//       />
//       <table className="table mt-2" {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>
//                   {column.render("Header")}
//                   {/* Render the columns filter UI */}
//                   <div>{column.canFilter ? column.render("Filter") : null}</div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <br />
//       <div className="pagination">
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {"<<"}
//         </button>{" "}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {"<"}
//         </button>{" "}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {">"}
//         </button>{" "}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {">>"}
//         </button>{" "}
//         <span>
//           Page{" "}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{" "}
//         </span>
//         <span>
//           | Go to page:{" "}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               gotoPage(page);
//             }}
//             style={{ width: "100px" }}
//           />
//         </span>{" "}
//         <select
//           value={pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//       {/* <div>
//         <pre>
//           <code>
//             {JSON.stringify(
//               state.filters,
//               {
//                 pageIndex,
//                 pageSize,
//                 pageCount,
//                 canNextPage,
//                 canPreviousPage,
//               },
//               null,
//               2
//             )}
//           </code>
//         </pre>
//       </div> */}
//     </div>
//   );
// }

// const AllProducts = () => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Name",
//         columns: [
//           {
//             Header: "Product Name",
//             accessor: "productName",
//           },
//         ],
//       },
//       {
//         Header: "Info",
//         columns: [
//           {
//             Header: "Age",
//             accessor: "age",
//           },
//           {
//             Header: "Status",
//             accessor: "status",
//           },
//           {
//             Header: "Profile Progress",
//             accessor: "progress",
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const data = [
//     {
//       productName: "Tayyab",
//       age: 22,
//       progress: 39,
//       status: "single",
//     },
//     {
//       productName: "Hassan",
//       age: 16,
//       progress: 40,
//       status: "complicated",
//     },
//     {
//       productName: "Abubakar",
//       age: 7,
//       progress: 39,
//       status: "single",
//     },
//     {
//       productName: "Sarosh",
//       age: 27,
//       progress: 92,
//       status: "relationship",
//     },
//     {
//       productName: "Tayyab",
//       age: 22,
//       progress: 39,
//       status: "single",
//     },
//     {
//       productName: "Hassan",
//       age: 16,
//       progress: 40,
//       status: "complicated",
//     },
//     {
//       productName: "Abubakar",
//       age: 7,
//       progress: 39,
//       status: "single",
//     },
//     {
//       productName: "Sarosh",
//       age: 27,
//       progress: 92,
//       status: "relationship",
//     },
//     {
//       productName: "Tayyab",
//       age: 22,
//       progress: 39,
//       status: "single",
//     },
//     {
//       productName: "Hassan",
//       age: 16,
//       progress: 40,
//       status: "complicated",
//     },
//     {
//       productName: "Abubakar",
//       age: 7,
//       progress: 39,
//       status: "single",
//     },
//     {
//       productName: "Sarosh",
//       age: 27,
//       progress: 92,
//       status: "relationship",
//     },
//   ];
//   return (
//     <Fragment>
//       <Container fluid={true}>
//         <Row>
//           <Col xs={12} className="mt-5">
//             <Card>
//               <CardHeader>
//                 <Row>
//                   <Col sm={12} md={12}>
//                     <h3>Products</h3>
//                     <div className="float-right">
//                       <Link to={`/products/AddProduct`}>
//                         <Button outline color="primary">
//                           Add New
//                         </Button>
//                       </Link>
//                     </div>
//                   </Col>
//                 </Row>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive columns={columns} data={data} />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </Fragment>
//   );
// };

// export default AllProducts;
import React from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import makeData from "./makeData";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function AllProducts() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "productName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(100000), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default AllProducts;
