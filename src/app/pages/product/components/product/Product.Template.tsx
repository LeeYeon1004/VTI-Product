import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import ModalComponent from '../modal/Modal.Component';
import TableComponent from './table/Table.Component';

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
function ProductTemplate() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <div className="max-w-[1200px] m-auto">
        <div className="flex items-center">
          <div className="flex-1">
            <Button
              onClick={handleOpen}
              sx={{ marginLeft: '12px', backgroundColor: '#0d6efd' }}
              variant="contained"
            >
              Add
            </Button>
          </div>
          <div className="">
            {/* search */}
            <div className="my-[12px] flex justify-end">
              <CssTextField
                sx={{ width: '300px' }}
                id="outlined-basic"
                label="Search"
                variant="outlined"
              />
              <Button
                sx={{ marginLeft: '12px', backgroundColor: '#0d6efd' }}
                variant="contained"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <TableComponent />
        <ModalComponent handleClose={handleClose} open={open} />
      </div>
    </div>
  );
}
export default ProductTemplate;
