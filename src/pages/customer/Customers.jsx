import React, { useState, Fragment } from "react";

import Search from "../../components/searchArea/Search";

import CustomerList from "../../assets/data/CustomerList.json";

import Pagination from "../../components/pagination/Pagination";

import { nanoid } from "nanoid";

import EdiTableRow from "../../components/ediTableRow/EdiTableRow";

import Accordion from "../../components/accordion/Accordion";

import { Modal } from "react-bootstrap";

import AddForm from "../../components/addCustomer/AddForm";

import "./_customers.scss";

const Customers = () => {
  const pageSize = 6;
  const pageLength = CustomerList.length / pageSize;
  const [page, setPage] = useState(1);
  const [contacts, setContacts] = useState(
    CustomerList.slice(page - 1, page * pageSize)
  );

  const handlePage = (thePage) => {
    setPage(thePage);
    const t = CustomerList.slice((thePage - 1) * pageSize, thePage * pageSize);
    setContacts(t);
  };

  const prevHandler = (thePage) => {
    if (thePage === 1) {
      handlePage(1);
    } else {
      handlePage(Number(thePage) - 1);
    }
  };

  const nextHandler = (thePage, thePageLength) => {
    if (thePage < thePageLength) {
      handlePage(Number(thePage) + 1);
    }
  };

  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: ""
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();

    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      location: contact.location
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      email: addFormData.email,
      phone: addFormData.phone,
      location: addFormData.location
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    event.target.value = "";
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      email: editFormData.email,
      phone: editFormData.phone,
      location: editFormData.location
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId();
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="customer">
      <div className="customer__header">
        <h3>Customers</h3>
      </div>
      <div className="customer__search">
        <Search onChange={inputHandler} />
      </div>
      <form onSubmit={handleEditFormSubmit} className="customer__form">
        <button onClick={handleShow} className="customer__form__button">
          <i className="bx bx-plus-circle"></i>
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          className="customer__form__modal"
        >
          <Modal.Header className="customer__form__modal__close" closeButton />
          <h2>Add Form Customer</h2>

          <AddForm
            addFormData={addFormData}
            handleAddFormChange={handleAddFormChange}
            handleAddFormSubmit={handleAddFormSubmit}
          />
        </Modal>
      </form>
      <table>
        <tbody>
          <tr>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EdiTableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <Accordion
                    input={inputText}
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tr>
        </tbody>
        <Pagination
          page={page}
          pages={pageLength}
          onClick={(pageEvent) => {
            handlePage(pageEvent);
          }}
          prevHandler={() => prevHandler(page)}
          nextHandler={() => nextHandler(page, pageLength)}
        />
      </table>
    </div>
  );
};

export default Customers;
