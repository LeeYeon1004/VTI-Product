import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import ModalComponent from '../modal/Modal.Component';
import SearchComponent from '../search/Search.Component';
import TableComponent from '../table/Table.Component';

function ProductTemplate() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<Date | null>(null);
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
            <div className="flex">
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="From"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="To"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <SearchComponent />
        </div>
        <TableComponent />
        <ModalComponent handleClose={handleClose} open={open} />
      </div>
    </div>
  );
}
export default ProductTemplate;
