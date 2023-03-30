import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddNewUser,
  AfterUpdateUser,
  UpdateUser,
} from "../store/actions/actions";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import { dropdown } from "../dropdownData/Dropdown";
import { formValidationSchema } from "../formValidation/formValidation";

const AddForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    id: "",
    name: "",
    email: "",
    profession: "student",
    city: "",
    contact: "",
  };
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    handleReset,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      if (editUserData[0]) {
        dispatch(UpdateUser(values));
        dispatch(AfterUpdateUser());
      } else {
        dispatch(AddNewUser({ ...values, id: uuid() }));
      }
      handleReset();
    },
  });
  const editUserData = useSelector((state) => state.users.editUser);
  useEffect(() => {
    if (editUserData[0]) {
      setValues({
        id: editUserData[0].id,
        name: editUserData[0].name,
        email: editUserData[0].email,
        profession: editUserData[0].profession,
        city: editUserData[0].city,
        contact: editUserData[0].contact,
      });
    }
  }, [editUserData,setValues]);

  return (
    <div className="mt-4 card p-2">
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <span className="text-danger">{errors.name && errors.name}</span>
        </div>
        <div className="form-group mt-2 mb-2">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <span className="text-danger">{errors.email && errors.email}</span>
        </div>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="profession"
              value={values.profession}
              checked={values.profession === "student"}
              onChange={() => setFieldValue("profession", "student")}
            />
            <label className="form-check-label">Student</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="profession"
              value={values.profession}
              checked={values.profession === "working"}
              onChange={() => setFieldValue("profession", "working")}
            />
            <label className="form-check-label">Working</label>
          </div>
          <span className="text-danger">
            {errors.profession && errors.profession}
          </span>
        </div>
        <div className="form-group mt-2">
          <label>State</label>
          <select
            name="city"
            onChange={handleChange}
            value={values.city}
            className="form-control"
          >
            <option>Choose...</option>
            {dropdown.map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          <span className="text-danger">{errors.city && errors.city}</span>
        </div>
        <div className="form-group mt-2">
          <label>Contact</label>
          <input
            type="tel"
            className="form-control"
            value={values.contact}
            name="contact"
            placeholder="Contact"
            onChange={handleChange}
          />
          <span className="text-danger">
            {errors.contact && errors.contact}
          </span>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <button type="submit" className="btn btn-primary mt-2 ">
              {editUserData[0] ? "Update" : "Submit"}
            </button>
          </div>
          <div className="col-lg-4">
            <div
              onClick={() => handleReset()}
              className="btn px-4 btn-secondary mt-2 "
            >
              Clear
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
