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
  // console.log(listData);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const getValue = (value: string) => {
    setValueSearch(value);
  };
  const [newList, setNewList] = useState(listData.slice(0, 5));
  const [numberPage, setNumberPage] = useState(1);
  const [fromValue, setFromValue] = useState<Date | null>(null);
  const [toValue, setToValue] = useState<Date | null>(null);
  const [action, setAction] = useState<boolean>(false);
  const handleAction = () => {
    setAction(true);
  };
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
    setResult(valueSearch);
  };
  // close search
  const handleReset = () => {
    setNewList(listData.slice(0, 6));
    setAction(false);
  };
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
  };
  return (
    <div className="">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-start">
          <div className="flex-1">
            <SearchComponent
              handleAction={handleAction}
              handleSearch={handleSearch}
              getValue={getValue}
            />
            <div className="flex">
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
              <div
                className={`flex items-end ml-[12px] ${
                  action ? 'flex' : 'hidden'
                }`}
              >
                <p>Kết quả tìm kiếm cho: "{result}"</p>
                <button
                  onClick={handleReset}
                  className="bg-[#ccc] rounded-[50%] w-[16px] h-[16px] m-[4px] flex items-center justify-center ml-[4px]"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
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
