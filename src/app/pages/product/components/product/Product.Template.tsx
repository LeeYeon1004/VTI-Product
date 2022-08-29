import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Props } from '../../models/product.interface';
import DatePickerF from '../date-picker/date.picker';
import ModalComponent from '../modal/modal.component';
import SearchComponent from '../search/search.component';
import TableComponent from '../table/table.component';

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
  const [valueSearch, setValueSearch] = useState<string>('');
  const getValue = (value: string) => {
    setValueSearch(value);
  };
  const [newList, setNewList] = useState(listData.slice(0, 5));
  const [numberPage, setNumberPage] = useState(1);
  useEffect(() => {
    const lim = 5;
    if (numberPage === 1) {
      setNewList(listData.slice(0, 5));
    } else {
      setNewList(listData.slice(numberPage + 1, numberPage + 1 + lim));
    }
  }, [listData, numberPage]);
  const getPage = (page: number) => {
    setNumberPage(page);
  };
  const handleSearch = () => {
    setNewList(
      newList.filter((item) => item.name.toLowerCase().includes(valueSearch)),
    );
  };
  // const getPrice = () => {
  //   newList.sort((a, b) => b.price - a.price);
  // };
  // getPrice();
  return (
    <div className="">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-start">
          <div className="flex-1">
            <SearchComponent handleSearch={handleSearch} getValue={getValue} />
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
          handleOpen={handleOpen}
          checkEdit={checkEdit}
          newList={newList}
          getPage={getPage}
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
