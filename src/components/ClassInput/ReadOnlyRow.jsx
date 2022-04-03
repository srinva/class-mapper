import React from "react";
import { Button } from "react-bootstrap";

const ReadOnlyRow = ({ cls, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{cls.class}</td>
      <td>{cls.day}</td>
      <td>{cls.time}</td>
      <td>{cls.location}</td>
      <td>
        <Button
          size="sm"
          type="button"
          variant="primary"
          onClick={(e) => handleEditClick(e, cls)}
        >
          Edit
        </Button>
        <Button
          size="sm"
          type="button"
          variant="danger"
          onClick={(e) => handleDeleteClick(cls.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
