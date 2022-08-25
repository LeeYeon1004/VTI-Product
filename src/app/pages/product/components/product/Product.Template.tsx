import { Button } from '@mui/material';
import { createContext } from 'react';
import { Product, Props } from '../../services/Interface';
import DatePickerF from '../date-picker/Date.Picker';
import ModalComponent from '../modal/Modal.Component';
import SearchComponent from '../search/Search.Component';
import TableComponent from '../table/Table.Component';

export const AddContext = createContext<Product[]>([]);
function ProductTemplate({ handleOpen, handleClose, item, open }: Props) {
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
            <DatePickerF />
          </div>
          <TableComponent />
          <ModalComponent handleClose={handleClose} open={open} />
        </div>
      </div>
    </AddContext.Provider>
  );
}
export default ProductTemplate;
