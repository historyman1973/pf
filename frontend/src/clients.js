import React, { Component } from "react";
import ClientTable from "./components/ClientTable";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from './components/Header'
import { Button, Modal, TextField } from "@mui/material";
import AddClientForm from "./components/AddClientForm";
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
position: fixed;
z-index: 1300;
right: 0;
bottom: 0;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`;

const Backdrop = styled('div')`
z-index: -1;
position: fixed;
right: 0;
bottom: 0;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);
-webkit-tap-highlight-color: transparent;
`;

const style = {
width: '60%',
bgcolor: 'background.paper',
border: '2px solid #000',
p: 2,
px: 4,
pb: 3,
};

function Clients() {

  const handleAddClientModalOpen = () => setOpen(true);
  const handleAddClientModalClose = () => setOpen(false);
  const [clientList, setClientList] = useState([]);
  const [open, setOpen] = React.useState(false);
  // const [loading, setLoading] = useState(true)

  const getClientList = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/client-list`);
      setClientList(res.data || []);
      // setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => getClientList(), []);

  return (
    <div>
      <Header title={'clients'}/>
      <Button onClick={handleAddClientModalOpen}>Test</Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleAddClientModalClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <AddClientForm />
        </Box>
      </StyledModal>
      <ClientTable class="padding-left-right" clients={clientList}/>
    </div>
  );

}

export default Clients;