import styled from '@emotion/styled';
import { Box, Modal, Typography, TextField } from '@mui/material';
// import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
};
const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    padding: '12px',
  },
  '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
      borderColor: '',
    },
  '& .MuiFormLabel-root': {
    top: '-4px',
  },
});
interface IProps {
  props: boolean;
  handleClose: () => void;
}
function ModalTemplate({ props, handleClose }: IProps) {
  return (
    <div>
      {/* modal */}
      <div>
        <Modal
          open={props}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center mb-[12px]">
              {/* name */}
              <Typography
                sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
              >
                Name
              </Typography>
              <CssTextField
                autoFocus={true}
                sx={{ flex: '1' }}
                id="outlined-basic"
                variant="outlined"
              />
            </div>

            {/* Email */}
            <div className="flex items-center mb-[12px]">
              <Typography
                sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
              >
                Email
              </Typography>
              <CssTextField
                sx={{ flex: '1' }}
                id="outlined-basic"
                variant="outlined"
              />
            </div>
            {/* Start */}
            <div className="flex items-center mb-[12px]">
              <Typography
                sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
              >
                Start
              </Typography>
              <CssTextField
                type="date"
                sx={{ flex: '1' }}
                id="outlined-basic"
                variant="outlined"
              />
            </div>
            {/* Contact */}
            <div className="flex items-center mb-[12px]">
              <Typography
                sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
              >
                Contact
              </Typography>
              <CssTextField
                sx={{ flex: '1' }}
                id="outlined-basic"
                variant="outlined"
              />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
export default ModalTemplate;
