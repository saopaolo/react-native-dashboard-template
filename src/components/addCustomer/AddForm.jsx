import React from "react";

import "./_addForm.scss";

const AddForm = ({ handleAddFormChange, handleAddFormSubmit, addFormData }) => {
  return (
    <form onSubmit={handleAddFormSubmit} className="add__form">
      <input
        type="text"
        name="name"
        required
        placeholder="Please enter a name"
        onChange={handleAddFormChange}
        value={addFormData.name}
      ></input>
      <input
        type="email"
        name="email"
        required
        placeholder="Please enter an email address"
        onChange={handleAddFormChange}
        value={addFormData.email}
      ></input>
      <input
        type="number"
        name="phone"
        required
        placeholder="Please enter a phone number"
        onChange={handleAddFormChange}
        value={addFormData.phone}
      ></input>
      <input
        type="text"
        name="location"
        required
        placeholder="Please enter a location"
        onChange={handleAddFormChange}
        value={addFormData.location}
      ></input>
      <button
        type="submit"
        onClick={handleAddFormSubmit}
        className="add__form__button"
      >
        {" "}
        Add
      </button>
    </form>
  );
};

export default AddForm;
