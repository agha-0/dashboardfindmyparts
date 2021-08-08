import React, { Fragment, useState } from "react";
import YearPicker from "rc-year-picker";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Nav,
  NavItem,
  NavLink,
  Form,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import ScrollArea from "react-scrollbar";
import ImageUploader from "react-images-upload";

const AddProduct = () => {
  // const [text, setText] = useState(`Enter text here`);
  // const handleChange = () => {
  //   setText("Enter text here");
  // };

  const [makeshow, setMakeShow] = useState(false);

  const [modelshow, setModelShow] = useState(false);

  const [Large, setLarge] = useState(false);

  const [BasicTab, setBasicTab] = useState("1");
  const LargeModaltoggle = () => setLarge(!Large);

  const [image, setimage] = useState({ pictures: [] });

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setimage({
      ...image,
      pictureFiles,
    });
  };

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm={12} className="mt-5">
            <h5>Add Product</h5>
          </Col>
          <Col sm={12} xl={8}>
            <Card>
              <CardBody>
                <h6>Add product</h6>
                <br />
                <Row>
                  {/* Product Name Starts */}
                  <Col sm={12}>
                    <FormGroup>
                      <Input
                        className="form-control"
                        type="text"
                        placeholder="Product Name"
                      />
                    </FormGroup>
                  </Col>
                  {/* Product Name Ends */}
                  {/* Select Product Type Starts */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlSelect9">Type</Label>
                      <Input
                        type="select"
                        name="select"
                        className="form-control digits"
                        defaultValue="select"
                      >
                        <option>select</option>
                        <option>New Product</option>
                        <option>Old Product</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  {/* Select Product Type Ends */}
                  {/* Part Number Starts */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlSelect9">
                        Part Number
                      </Label>
                      <Input
                        className="form-control digits"
                        type="number"
                        placeholder="Part Number"
                      />
                    </FormGroup>
                  </Col>
                  {/* Part Number Ends */}
                  {/* Select Make Starts */}
                  <Col sm={12} md={8}>
                    <FormGroup>
                      <Input
                        className="form-control digits"
                        type="select"
                        name="select"
                        defaultValue="select"
                      >
                        <option>Make</option>
                        <option>1</option>
                        <option>2</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm={12} md={4}>
                    <Button
                      className="btn-pill btn-air-primary"
                      color="primary"
                      onClick={() => setMakeShow(!makeshow)}
                    >
                      + Add
                    </Button>
                  </Col>
                  <Col sm={12}>
                    {makeshow ? (
                      <div>
                        <hr />
                        <Row>
                          <Col sm={12} md={8}>
                            <Form>
                              <Input className="form-control" type="text" />
                            </Form>
                          </Col>
                          <Col sm={12} md={4}>
                            <Button
                              className="btn-pill btn-air-primary"
                              color="primary"
                            >
                              + Add
                            </Button>
                          </Col>
                        </Row>
                        <hr />
                      </div>
                    ) : null}
                  </Col>
                  {/* Select Make Ends */}
                  {/* Select Modal Starts */}
                  <Col sm={12} md={8}>
                    <FormGroup>
                      <Input
                        className="form-control digits"
                        type="select"
                        name="select"
                        placeholder="Model Name"
                        defaultValue="select"
                      >
                        <option>Modal Name</option>
                        <option>1</option>
                        <option>2</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm={12} md={4}>
                    <Button
                      className="btn-pill btn-air-primary"
                      color="primary"
                      onClick={() => setModelShow(!modelshow)}
                    >
                      + Add
                    </Button>
                  </Col>
                  <Col sm={12}>
                    {modelshow ? (
                      <div>
                        <hr />
                        <Row>
                          <Col sm={12} md={12}>
                            <FormGroup>
                              <Input
                                className="form-control digits"
                                type="select"
                                name="select"
                                defaultValue="select"
                              >
                                <option>Make</option>
                                <option>1</option>
                                <option>2</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col sm={12} md={8}>
                            <Form>
                              <Input
                                className="form-control"
                                type="text"
                                placeholder="Modal Name"
                              />
                            </Form>
                          </Col>
                          <Col sm={12} md={4}>
                            <Button
                              className="btn-pill btn-air-primary"
                              color="primary"
                            >
                              + Add
                            </Button>
                          </Col>
                        </Row>
                        <hr />
                      </div>
                    ) : null}
                  </Col>
                  <Col sm={12}>
                    <FormGroup>
                      <YearPicker
                        placeholder="Model Year"
                        thisYearLabel="Current Year"
                      />
                    </FormGroup>
                  </Col>
                  {/* Select Modal Ends */}
                  <br />
                  <Col sm={12}>
                    <SimpleMDE
                      id="editor_container"
                      // onChange={handleChange}
                      // value={text}
                      options={{
                        autofocus: true,
                        spellChecker: false,
                      }}
                    />
                  </Col>
                  <br />
                  <Col sm={12}>
                    <Button
                      style={{ marginTop: "10px" }}
                      className="float-right btn-pill btn-air-primary mb-2"
                      color="primary"
                      onClick={LargeModaltoggle}
                    >
                      + Add Media
                      <Modal isOpen={Large} toggle={LargeModaltoggle} size="lg">
                        <ModalHeader toggle={LargeModaltoggle}>
                          Add Media
                        </ModalHeader>
                        <ModalBody>
                          <Nav tabs>
                            <NavItem>
                              <NavLink
                                href="#javascript"
                                className={BasicTab === "1" ? "active" : ""}
                                onClick={() => setBasicTab("1")}
                              >
                                Upload File
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                href="#javascript"
                                className={BasicTab === "3" ? "active" : ""}
                                onClick={() => setBasicTab("3")}
                              >
                                Media Library
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent activeTab={BasicTab}>
                            <TabPane className="fade show" tabId="1">
                              <ImageUploader
                                withIcon={false}
                                withPreview={true}
                                label=""
                                singleImage={true}
                                buttonText="Upload Images"
                                onChange={onDrop}
                                imgExtension={[
                                  ".jpg",
                                  ".gif",
                                  ".png",
                                  ".gif",
                                  ".svg",
                                ]}
                                maxFileSize={1048576}
                                fileSizeError=" file size is too big"
                              />
                            </TabPane>
                            <TabPane tabId="3">
                              <div
                                id="aniimated-thumbnials"
                                className="row my-gallery gallery mt-2"
                              >
                                <figure
                                  itemProp="associatedMedia"
                                  className="col-md-3 col-6 img-hover hover-1"
                                >
                                  <div className="">
                                    <Media
                                      className="img-fluid"
                                      src={require("../../assets/images/lightgallry/08.jpg")}
                                      itemProp="thumbnail"
                                      alt=""
                                    />
                                  </div>
                                </figure>
                                <figure
                                  itemProp="associatedMedia"
                                  className="col-md-3 col-6 img-hover hover-1"
                                >
                                  <div className="">
                                    <Media
                                      className="img-fluid"
                                      src={require("../../assets/images/lightgallry/09.jpg")}
                                      itemProp="thumbnail"
                                      alt=""
                                    />
                                  </div>
                                </figure>
                                <figure
                                  itemProp="associatedMedia"
                                  className="col-md-3 col-6 img-hover hover-1"
                                >
                                  <div className="">
                                    <Media
                                      className="img-fluid"
                                      src={require("../../assets/images/lightgallry/010.jpg")}
                                      itemProp="thumbnail"
                                      alt=""
                                    />
                                  </div>
                                </figure>
                                <figure
                                  itemProp="associatedMedia"
                                  className="col-md-3 col-6 img-hover hover-1"
                                >
                                  <div className="">
                                    <Media
                                      className="img-fluid"
                                      src={require("../../assets/images/lightgallry/011.jpg")}
                                      itemProp="thumbnail"
                                      alt=""
                                    />
                                  </div>
                                </figure>
                              </div>
                            </TabPane>
                          </TabContent>
                        </ModalBody>
                      </Modal>
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} xl={4}>
            <Card>
              <CardHeader>
                <h6>Product categories</h6>
              </CardHeader>
              <CardBody className="animate-chk">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      href="#javascript"
                      className={BasicTab === "1" ? "active" : ""}
                      onClick={() => setBasicTab("1")}
                    >
                      All
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#javascript"
                      className={BasicTab === "3" ? "active" : ""}
                      onClick={() => setBasicTab("3")}
                    >
                      Most Used
                    </NavLink>
                  </NavItem>
                </Nav>
                <ScrollArea speed={0.5} horizontal={false} vertical={true}>
                  <TabContent activeTab={BasicTab}>
                    <TabPane className="fade show" tabId="1">
                      <Label className="d-block mt-2" for="chk-ani">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani"
                          type="checkbox"
                          defaultChecked
                        />
                        Uncategorized
                      </Label>
                      <Label className="d-block" for="chk-ani1">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani1"
                          type="checkbox"
                        />
                        Cannned & Frozen
                      </Label>
                      <Label className="d-block" for="chk-ani2">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani2"
                          type="checkbox"
                        />
                        Exotic Fruits
                      </Label>
                      <Label className="d-block" for="chk-ani3">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani3"
                          type="checkbox"
                        />
                        Fruits
                      </Label>
                    </TabPane>
                    <TabPane tabId="3">
                      <Label className="d-block mt-2" for="chk-ani">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani"
                          type="checkbox"
                          defaultChecked
                        />
                        {Option} {"1"}
                      </Label>
                      <Label className="d-block" for="chk-ani1">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani1"
                          type="checkbox"
                        />
                        {Option} {"2"}
                      </Label>
                      <Label className="d-block" for="chk-ani2">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani2"
                          type="checkbox"
                          defaultChecked
                        />
                        {Option} {"3"}
                      </Label>
                      <Label className="d-block" for="chk-ani3">
                        <Input
                          className="checkbox_animated"
                          id="chk-ani3"
                          type="checkbox"
                        />
                        {Option} {"4"}
                      </Label>
                    </TabPane>
                  </TabContent>
                </ScrollArea>
                <br />
                <Link to={"/products/category"}>
                  <Button className="btn-pill btn-air-primary" color="primary">
                    + Add new category
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProduct;
