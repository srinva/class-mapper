import React from "react";
import { Button } from "react-bootstrap";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="class"
          required="required"
          placeholder="MA 242"
          value={editFormData.class}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="day"
          required="required"
          placeholder="Monday"
          value={editFormData.day}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="time"
          required="required"
          placeholder="12:30"
          value={editFormData.time}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="location"
          required="required"
          placeholder="111 Lampe Drive"
          value={editFormData.location}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <Button variant="success" size="sm" type="submit">
          Save
        </Button>
        <Button
          variant="danger"
          size="sm"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
