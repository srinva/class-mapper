import React from "react";

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
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
