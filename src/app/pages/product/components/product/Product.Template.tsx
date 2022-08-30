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
  console.log(listData);
  const [valueSearch, setValueSearch] = useState<string>('');
  const getValue = (value: string) => {
    setValueSearch(value);
  };
  const [newList, setNewList] = useState(listData.slice(0, 5));
  const [numberPage, setNumberPage] = useState(1);
  const [fromValue, setFromValue] = useState<Date | null>(null);
  const [toValue, setToValue] = useState<Date | null>(null);
  useEffect(() => {
    const lim = 6;
    const start = (numberPage - 1) * lim;
    const end = start + lim;
    if (numberPage === 1) {
      setNewList(listData.slice(0, 6));
    } else {
      setNewList(listData.slice(start, end));
    }
  }, [listData, numberPage]);
  const getPage = (page: number) => {
    setNumberPage(page);
  };
  // search
  const handleSearch = () => {
    setNewList(
      newList.filter((item) => item.name?.toLowerCase().includes(valueSearch)),
    );
  };
  // const getPrice = () => {
  //   newList.sort((a, b) => b.price - a.price);
  // };
  // getPrice();
  // from value
  const getFromValue = (from: Date | null) => {
    setFromValue(from);
  };
  const getToValue = (to: Date | null) => {
    setToValue(to);
  };
  const dateValue = () => {
    setNewList(
      newList.filter((item: any) => {
        if (fromValue && toValue) {
          return (
            new Date(item.mfg).getTime() >= fromValue.getTime() &&
            new Date(item.mfg).getTime() <= toValue.getTime()
          );
        }
        return item;
      }),
    );
    console.log('de');
  };
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
          <DatePickerF
            dateValue={dateValue}
            getFromValue={getFromValue}
            getToValue={getToValue}
          />
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
