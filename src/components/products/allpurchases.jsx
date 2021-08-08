import React, { Fragment, useState, useCallback, useMemo } from "react";
import differenceBy from "lodash/differenceBy";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { tableData } from "../../data/dummyTableData";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";

const AllProducts = () => {
  const [data, setData] = useState(tableData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const tableColumns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      center: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      center: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      center: true,
    },
    {
      name: "Creat_on",
      selector: "creat_on",
      sortable: true,
      center: true,
    },
  ];

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, "name"));
        toast.success("Successfully Deleted !");
      }
    };

    return (
      <button key="delete" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col xs={12} className="mt-5">
            <Card>
              <CardHeader>
                <Row>
                  <Col sm={12} md={12}>
                    <h3>Purchases</h3>
                    <div className="float-right">
                      <Link to={`/products/AddPurchase`}>
                        <Button outline color="primary">
                          Add New
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  pagination={true}
                  selectableRows
                  persistTableHead
                  contextActions={contextActions}
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AllProducts;
