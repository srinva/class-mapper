import React, { useState } from "react";
import "./ClassInput.css";
import data from "./ClassData.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const ClassInput = () => {
  const [classes, setClasses] = useState(data);

  const [addFormData, setAddFormData] = useState({
    class: "",
    day: "",
    time: "",
    location: "",
  });

  const [editFormData, setEditFormData] = useState({
    class: "",
    day: "",
    time: "",
    location: "",
  });

  const [editClassId, setEditClassID] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newClass = {
      id: nanoid(),
      class: addFormData.class,
      day: addFormData.day,
      time: addFormData.time,
      location: addFormData.location,
    };

    const newClasses = [...classes, newClass];
    setClasses(newClasses);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedClass = {
      id: editClassId,
      class: editFormData.class,
      day: editFormData.day,
      time: editFormData.time,
      location: editFormData.location,
    };

    const newClasses = [...classes];

    const index = classes.findIndex((cls) => cls.id === editClassId);

    newClasses[index] = editedClass;

    setClasses(newClasses);
    setEditClassID(null);
  };

  const handleEditClick = (e, cls) => {
    e.preventDefault();
    setEditClassID(cls.id);

    const formValues = {
      class: cls.class,
      day: cls.day,
      time: cls.time,
      location: cls.location,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditClassID(null);
  };

  const handleDeleteClick = (classId) => {
    const newClasses = [...classes];

    const index = classes.findIndex((cls) => cls.id === classId);

    newClasses.splice(index, 1);

    setClasses(newClasses);
  };
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Day</th>
              <th>Time</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((currentClass) => (
              <>
                {editClassId === currentClass.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    cls={currentClass}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="class"
          required="required"
          placeholder="MA 242"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="day"
          required="required"
          placeholder="Monday"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="time"
          required="required"
          placeholder="12:30"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="location"
          required="required"
          placeholder="111 Lampe Drive"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default ClassInput;
