import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { employeeData } from '../data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

type BasicModalProps = {
  id: number;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type Employee = {
  id: number;
  name: string;
  department: string;
  age: number;
  work_hours: number;
  email: string;
  city: string;
  dob: string;
  job_title: string;
};

const BasicModal: React.FC<BasicModalProps> = ({ id, isModal, setIsModal }) => {
  const [selectedEmployee, setSelectedEmployee] = React.useState<Employee | null>(null);

  React.useEffect(() => {
    if (id) {
      const employee = employeeData.find((emp) => emp.id === id);
      setSelectedEmployee(employee || null);
    }
  }, [id]);

  const handleClose = () => {
    setIsModal(false);
    setSelectedEmployee(null);
  };

  return (
    <Modal
      open={isModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {selectedEmployee ? (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
              Employee Details
            </Typography>
            <Typography variant="body1">
              <strong>Name:</strong> {selectedEmployee.name}
            </Typography>
            <Typography variant="body1">
              <strong>Department:</strong> {selectedEmployee.department}
            </Typography>
            <Typography variant="body1">
              <strong>Age:</strong> {selectedEmployee.age}
            </Typography>
            <Typography variant="body1">
              <strong>Work Hours:</strong> {selectedEmployee.work_hours}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {selectedEmployee.email}
            </Typography>
            <Typography variant="body1">
              <strong>City:</strong> {selectedEmployee.city}
            </Typography>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {selectedEmployee.dob}
            </Typography>
            <Typography variant="body1">
              <strong>Job Title:</strong> {selectedEmployee.job_title}
            </Typography>
          </>
        ) : (
          <Typography variant="body1">No employee found.</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default BasicModal;
