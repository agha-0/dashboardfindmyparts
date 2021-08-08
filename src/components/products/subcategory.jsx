import React, { useState, Fragment, useCallback, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import differenceBy from "lodash/differenceBy";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { tableData } from "../../data/dummyTableData";

const SubCategory = () => {
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
      <Container fluid="true">
        <Row>
          <Col sm={12} className="mt-2">
            <h5>Product Sub-Categories</h5>
          </Col>
          <Col xs={12} md={4} className="mt-5">
            <Form className="form theme-form">
              <Row>
                <Col>
                  <FormGroup>
                    <Label htmlFor="exampleFormControlSelect9">
                      Category Name
                    </Label>
                    <Input
                      className="form-control"
                      type="select"
                      placeholder="Name"
                    >
                      <option>select</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Sub-category Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Button color="primary" className="mr-1">
                Add New Sub-Category
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={8} className="mt-5">
            <Card>
              <CardBody>
                <Row>
                  <Col sm={12} md={3}>
                    <FormGroup>
                      <Input
                        type="select"
                        name="select"
                        className="form-control digits"
                        defaultValue="Bulk Actions"
                      >
                        <option>Bulk Actions</option>
                        <option>edit</option>
                        <option>Move to trash</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm={12} md={2}>
                    <Button outline size="sm" color="primary">
                      Apply
                    </Button>
                  </Col>
                </Row>
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

export default SubCategory;
