import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteProducts } from "../actions/productAction";
import moment from "moment";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteProducts(+id));
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getProductsList: state.products.product,
  };
};
function dateFormatter(cell: any) {
  if (!cell) {
    return "";
  }
  return `${
    moment(cell).format("DD-MM-YYYY HH:MM:SS")
      ? moment(cell).format("DD-MM-YYYY HH:MM:SS")
      : moment(cell).format("DD-MM-YYYY HH:MM:SS")
  }`;
}

function imageFormatter(cell, row) {
  return <img style={{ width: 150 }} src={cell} />;
}

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "name",
      text: "Name Products",
      sort: true,
    },
    {
      dataField: "qty",
      text: "Quantity",
      sort: true,
    },
    {
      dataField: "picture",
      text: "Picture",
      sort: true,
      formatter: imageFormatter,
    },
    {
      dataField: "expiredAt",
      text: "ExpiredAt",
      sort: true,
      formatter: dateFormatter,
    },
    {
      dataField: "isActive",
      text: "IsActive",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            {/* <ModalUpdate buttonLabel="Edit" data={row} /> */}
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button
              color="dark"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Container>
        {props.getProductsList ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getProductsList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <Link to="/create">
                      <Button color="dark" className="mr-2">
                        Create Products
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-right">
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Search .."
                      />
                    </div>
                  </Col>
                </Row>

                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.getProductsList ? (
              <h4>{props.getProductsList}</h4>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
