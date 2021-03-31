import React, { useState, useEffect } from "react";

const TataDataTable = () => {
  const [getProduct, setGetProduct] = useState([]);
  useEffect(() => {
    fetch("https://jafar-motor-database.herokuapp.com/getTata")
      .then((res) => res.json())
      .then((data) => setGetProduct(data.reverse()));
  }, []);

  const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: "none",
    boxShadow: "0px 0px 2px 0px lightGray",
  };

  return (
    <div className="container">
        <h1 className="text-center">Product's of TATA</h1>
      <div className="row mt-5 pt-5 main-service " style={containerStyle}>
        <table className="table table-borderless">
          <thead style={{ backgroundColor: "White", borderRadius: "8px" }}>
            <tr>
              <th className="text-secondary" scope="col">
                Product Name
              </th>
              <th className="text-secondary" scope="col">
                Product Code
              </th>
              <th className="text-secondary" scope="col">
                Quantity
              </th>
              <th className="text-secondary" scope="col">
                Selling Price
              </th>
              <th className="text-secondary" scope="col">
                Buying Price
              </th>
              <th className="text-secondary" scope="col">
                Entry Date
              </th>
              <th className="text-secondary" scope="col">
                Company
              </th>
              <th className="text-secondary" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {
                getProduct.map(tata => (
                    <tr key={tata.productCode}>
                        <td>{tata.productName}</td>
                        <td>{tata.productCode}</td>
                        <td>{tata.productQuantity}</td>
                        <td>{tata.salePrice}</td>
                        <td>{tata.buyPrice}</td>
                        <td>{tata.entryDate}</td>
                        <td>{tata.company}</td>
                        <td><a href="#hello" className="btn btn-primary"><i className="far fa-edit"></i></a></td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TataDataTable;
