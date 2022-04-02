import React from "react";

const ReadOnlyRow = ({ cls, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{cls.class}</td>
      <td>{cls.day}</td>
      <td>{cls.time}</td>
      <td>{cls.location}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, cls)}>
          Edit
        </button>
        <button type="button" onClick={(e) => handleDeleteClick(cls.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
