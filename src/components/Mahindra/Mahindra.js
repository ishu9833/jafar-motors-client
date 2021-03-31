import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const Mahindra = () => {
  let history = useHistory();
  const span = { color: "red" };
  const { register, handleSubmit, errors } = useForm();
  const [product, setProduct] = useState({});

  const onSubmit = (data) => {
    fetch("https://jafar-motor-database.herokuapp.com/mahindraData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setProduct(result));
      history.push("/mahindraDataTable")
  };

  
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
              defaultValue="Mahindra"
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

      
    </div>
  );
};

export default Mahindra;
