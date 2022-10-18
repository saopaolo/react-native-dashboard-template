import React, { useState } from "react";

const Accordion = ({ contact, handleEditClick, handleDeleteClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <div className="accordion__title" onClick={() => setActive(!active)}>
        <span>{contact.name}</span>
        <div className="accordion__title__icons">
          <span className="accordion__title__icons__down">
            <i className="bx bxs-chevrown-down"></i>
          </span>
        </div>{" "}
        {/* accordion__title__icons */}
        <div className="accodion__title__actions__area">
          <tbody>
            <tr>
              <td>
                <button
                  type="button"
                  onClick={(event) => handleEditClick(event, contact)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </div>
      </div>{" "}
      {/* accordion__title*/}
      <div className="accordion__content">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.location}</span>
      </div>{" "}
      {/* accordion__content*/}
    </div>
  );
};

export default Accordion;
