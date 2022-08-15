import Modal from '@mui/material/Modal';
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import React from "react";

const modalStyle = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
    textAlign: 'center'
};

function MultiModeModal(props) {

    return (
        <Modal
            open={props.open}
            onClose={props.closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6">
                    Add a multi mode trip to work
                </Typography>
                <Box sx={{mt: '15px'}}>
                    dd
                </Box>
            </Box>
        </Modal>
    )
}

export default MultiModeModal;