import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";

const AddStudentModal = ({ open, handleClose }) => {
  const [student, setStudent] = useState({
    name: "",
    class: "",
    section: "",
    rollNumber: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await addDoc(collection(db, "students"), student);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Student</DialogTitle>
      <DialogContent>
        <TextField label="Name" name="name" onChange={handleChange} fullWidth />
        <TextField label="Class" name="class" onChange={handleChange} fullWidth />
        <TextField label="Section" name="section" onChange={handleChange} fullWidth />
        <TextField label="Roll Number" name="rollNumber" onChange={handleChange} fullWidth />
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentModal;
