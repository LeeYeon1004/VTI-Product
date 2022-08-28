import { Button } from '@mui/material';
import { Props } from '../../models/product.interface';
import DatePickerF from '../date-picker/Date.Picker';
import ModalComponent from '../modal/Modal.Component';
import SearchComponent from '../search/Search.Component';
import TableComponent from '../table/Table.Component';

function ProductTemplate({
  handleOpen,
  handleClose,
  open,
  listData,
  handlePostItem,
  handleRemove,
  getItem,
  sendItem,
  checkAdd,
  checkEdit,
  check,
  handleEdit,
}: Props) {
  return (
    <div className="">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-start">
          <div className="flex-1">
            <SearchComponent />
            <Button
              onClick={() => {
                handleOpen();
                checkAdd();
              }}
              sx={{ backgroundColor: '#0d6efd' }}
              variant="contained"
            >
              Add
            </Button>
          </div>
          <DatePickerF />
        </div>
        <TableComponent
          getItem={getItem}
          handleRemove={handleRemove}
          listData={listData}
          handleOpen={handleOpen}
          checkEdit={checkEdit}
        />
        <ModalComponent
          handlePostItem={handlePostItem}
          handleClose={handleClose}
          open={open}
          sendItem={sendItem}
          check={check}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}
export default ProductTemplate;
