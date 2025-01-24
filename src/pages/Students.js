import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, IconButton } from "@mui/material";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import AddStudentModal from "../components/AddStudentModal";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      setStudents(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchStudents();
  }, [open]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <Container>
      <Button startIcon={<Add />} variant="contained" onClick={() => setOpen(true)}>Add Student</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Section</TableCell>
            <TableCell>Roll Number</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={student.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.section}</TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>
                <IconButton><Visibility /></IconButton>
                <IconButton><Edit /></IconButton>
                <IconButton onClick={() => handleDelete(student.id)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddStudentModal open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default Students;
