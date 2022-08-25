import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { createContext, useState } from 'react';
import { Product, Props } from '../../services/Interface';
import ModalComponent from '../modal/Modal.Component';
import SearchComponent from '../search/Search.Component';
import TableComponent from '../table/Table.Component';

export const AddContext = createContext<Product[]>([]);
function ProductTemplate({ handleOpen, handleClose, item, open }: Props) {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <AddContext.Provider value={item}>
      <div className="">
        <div className="max-w-[1200px] m-auto">
          <div className="flex justify-start">
            <div className="flex-1">
              <SearchComponent />
              <Button
                onClick={handleOpen}
                sx={{ backgroundColor: '#0d6efd' }}
                variant="contained"
              >
                Add
              </Button>
            </div>
            <div className="flex mt-[12px]">
              <div className="mr-[8px]">
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
          <TableComponent />
          <ModalComponent handleClose={handleClose} open={open} />
        </div>
      </div>
    </AddContext.Provider>
  );
}
export default ProductTemplate;
