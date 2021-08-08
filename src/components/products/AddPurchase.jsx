import React, { Fragment, useState } from "react";
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

const AddPurchase = () => {
  // const [text, setText] = useState(`Enter text here`);
  // const handleChange = () => {
  //   setText("Enter text here");
  // };

  const [show, setShow] = useState(false);

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
            <h5>Add Purchase</h5>
          </Col>
          <Col sm={12}>
            <Card>
              <CardBody>
                <h6>Add purchase</h6>
                <br />
                <Row>
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
                  {/* Select Product Name Starts */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlSelect9">Name</Label>
                      <Input
                        className="form-control"
                        type="select"
                        placeholder="Product Name"
                      >
                        <option>select</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  {/* Select Product Name Ends */}
                  {/* Select Category Starts */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlSelect9">
                        Category
                      </Label>
                      <Input
                        type="select"
                        name="select"
                        className="form-control digits"
                        defaultValue="select"
                      >
                        <option>select</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  {/* Select Category Ends */}
                  {/* Select Category Starts */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlSelect9">
                        Sub-Category
                      </Label>
                      <Input
                        type="select"
                        name="select"
                        className="form-control digits"
                        defaultValue="select"
                      >
                        <option>select</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  {/* Select Category Ends */}
                  {/* Price Starts here */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">Price</Label>
                      <Input className="form-control" type="number" />
                    </FormGroup>
                  </Col>
                  {/* Price Ends here */}
                  {/* Quantity Starts here */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">Quantity</Label>
                      <Input className="form-control" type="digit" />
                    </FormGroup>
                  </Col>
                  {/* quantity Ends here */}
                  {/* Seller Name Starts here */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">
                        Seller Name
                      </Label>
                      <Input className="form-control" type="text" />
                    </FormGroup>
                  </Col>
                  {/* Seller Name Ends here */}
                  {/* Company Name Starts here */}
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label htmlFor="exampleFormControlInput1">
                        Company Name
                      </Label>
                      <Input className="form-control" type="text" />
                    </FormGroup>
                  </Col>
                  {/* Company Name Ends here */}
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
                      className="float-right btn-pill btn-air-primary mb-2 mt-2"
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
                  <br />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddPurchase;
