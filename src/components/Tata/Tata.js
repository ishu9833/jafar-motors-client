import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const Tata = () => {
  let history = useHistory();
  const span = { color: "red" };
  const { register, handleSubmit, errors } = useForm();
  const [product, setProduct] = useState({});

  const onSubmit = (data) => {
    fetch("https://jafar-motor-database.herokuapp.com/tataData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setProduct(result));
      history.push("/tataDataTable")
  };

  // get data
  // const [getProduct, setGetProduct] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/getTata")
  //     .then((res) => res.json())
  //     .then((data) => setGetProduct(data));
  // }, []);

  // const containerStyle = {
  //   backgroundColor: "#F4FDFB",
  //   border: "none",
  //   boxShadow: "0px 0px 2px 0px lightGray",
  // };
  return (
    <div className="container">
      <h1 className="text-center">Product Entry</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="productName"
              className="form-control"
              placeholder="Product-name"
              ref={register({ required: true })}
            />
            {errors.productName && (
              <span style={span}>This field is required</span>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              name="productCode"
              className="form-control"
              placeholder="Product code number"
              ref={register({ required: true })}
            />
            {errors.productCode && (
              <span style={span}>This field is required</span>
            )}
          </div>
          <div className="col">
            <input
              type="number"
              name="productQuantity"
              className="form-control"
              placeholder="Product quantity"
              ref={register({ required: true })}
            />
            {errors.productQuantity && (
              <span style={span}>This field is required</span>
            )}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <input
              type="date"
              name="entryDate"
              className="form-control"
              placeholder="Entry Date"
              ref={register({ required: true })}
            />
            {errors.entryDate && (
              <span style={span}>This field is required</span>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              name="company"
              defaultValue="Tata"
              className="form-control"
              placeholder="Company name"
              ref={register({ required: true })}
            />
            {/* {errors.company && <span style={span}>This field is required</span>} */}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <input
              type="number"
              name="salePrice"
              className="form-control"
              placeholder="Selling Price"
              ref={register({ required: true })}
            />
            {errors.salePrice && (
              <span style={span}>This field is required</span>
            )}
          </div>
          <div className="col">
            <input
              type="number"
              name="buyPrice"
              className="form-control"
              placeholder="Buying Price"
              ref={register({ required: true })}
            />
            {errors.buyPrice && (
              <span style={span}>This field is required</span>
            )}
          </div>
        </div>
        <br />

        <input type="submit" value="submit" className="btn btn-secondary" />
      </form>



      {/* <div className="row mt-5 pt-5 main-service " style={containerStyle}>
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
            {getProduct.map((getProducts) => (
              <GetTata
                getProducts={getProducts}
                key={getProducts.productCode}
              />
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Tata;
