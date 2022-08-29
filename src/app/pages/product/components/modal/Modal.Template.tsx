import { Modal, Typography, TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { IModal } from '../../models/modal.interface';
import ButtonProgress from '../button-progress/button.progress';

function ModalTemplate({
  open,
  handleClose,
  handlePostItem,
  sendItem,
  check,
  handleEdit,
}: IModal) {
  const [nameEvent, setNameEvent] = useState<string>('');
  const [priceEvent, setPriceEvent] = useState<number>(0);
  const [mfgEvent, setMfgEvent] = useState<Dayjs | null>();
  const [brandEvent, setBrandEvent] = useState<string>('');
  // put
  useEffect(() => {
    if (sendItem) {
      setNameEvent(sendItem.name);
      setPriceEvent(sendItem.price);
      setMfgEvent(sendItem.mfg as unknown as Dayjs | null);
      setBrandEvent(sendItem.brand);
    }
  }, [sendItem]);
  const handlePut = () => {
    const objectItem = {
      name: nameEvent,
      price: priceEvent,
      mfg: mfgEvent + '',
      brand: brandEvent,
    };
    handleEdit(objectItem);
  };
  // -------------------
  // add
  const handlePost = () => {
    const objectItem = {
      name: nameEvent,
      price: priceEvent,
      mfg: mfgEvent + '',
      brand: brandEvent,
    };
    handlePostItem(objectItem);
  };
  const handleCheck = () => {
    if (check === true) {
      handlePut();
    } else {
      handlePost();
    }
  };
  const handleClick = () => {
    const handleTimeout = setTimeout(() => {
      handleCheck();
      handleClose();
      setNameEvent('');
      setPriceEvent(0);
      setMfgEvent(null);
      setBrandEvent('');
    }, 2000);
    return () => clearTimeout(handleTimeout);
  };
  // -------------------
  // fix lại handlekey
  const handleKey = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  // get date picker
  const handlePicker = (e: Dayjs | null) => {
    setMfgEvent(e);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="bg-[#fff] m-auto flex flex-col max-w-[500px] p-[24px] rounded-[4px] shadow-xl">
        {/* name */}
        <div className="flex items-center mb-[12px]">
          <Typography
            sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
          >
            Name
          </Typography>
          <TextField
            autoFocus={true}
            sx={{ flex: '1' }}
            size="small"
            id="outlined-basic"
            variant="outlined"
            value={nameEvent}
            onChange={(e) => setNameEvent(e.target.value)}
          />
        </div>
        {/* Price */}
        <div className="flex items-center mb-[12px]">
          <Typography
            sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
          >
            Price
          </Typography>
          <TextField
            size="small"
            sx={{ flex: '1' }}
            id="outlined-basic"
            variant="outlined"
            value={priceEvent}
            onChange={(e) => setPriceEvent(+e.target.value)}
          />
        </div>
        {/* Mfg.Date */}
        <div className="flex items-center mb-[12px]">
          <Typography
            sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
          >
            Mfg.Date
          </Typography>
          <div className="flex-1">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={mfgEvent}
                onChange={handlePicker}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
        {/* Brand */}
        <div className="flex items-center mb-[12px]">
          <Typography
            sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
          >
            Brand
          </Typography>
          <TextField
            size="small"
            sx={{ flex: '1' }}
            id="outlined-basic"
            variant="outlined"
            onKeyPress={handleKey}
            value={brandEvent}
            onChange={(e) => setBrandEvent(e.target.value)}
          />
        </div>
        {/* button */}
        <div className="flex justify-end h-[36px] items-center">
          <Button
            className="w-[80px]"
            onClick={handleClose}
            variant="outlined"
            color="error"
          >
            CANCEL
          </Button>
          <div className="mr-[-8px]">
            <ButtonProgress handleOnClick={handleClick} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default ModalTemplate;
