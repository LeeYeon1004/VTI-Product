import { Modal, Typography, TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import ButtonProgress from '../button-progress/Button.Progress';

interface IProps {
  props: boolean;
  handleClose: () => void;
}
function ModalTemplate({ props, handleClose }: IProps) {
  const [nameEvent, setNameEvent] = useState<string>('');
  const [priceEvent, setPriceEvent] = useState<string>('');
  const [mfgEvent, setMfgEvent] = useState<any>();
  const [brandEvent, setBrandEvent] = useState<string>('');

  const handlePostItem = async () => {
    // await HttpService.post('product/create', {
    //   name: nameEvent,
    //   price: priceEvent,
    //   mfg: mfgEvent,
    //   brand: brandEvent,
    // });
    console.log({
      name: nameEvent,
      price: priceEvent,
      mfg: mfgEvent,
      brand: brandEvent,
    });
  };
  const handleClick = () => {
    const handleTimeout = setTimeout(() => {
      handlePostItem();
      handleClose();
      setNameEvent('');
      setPriceEvent('');
      setMfgEvent('');
      setBrandEvent('');
    }, 2000);
    return () => clearTimeout(handleTimeout);
  };
  // fix lại handlekey
  const handleKey = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handlePostItem();
      handleClose();
    }
  };
  return (
    <Modal
      open={props}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="bg-[#fff] m-auto flex flex-col max-w-[500px]">
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
            onChange={(e) => setPriceEvent(e.target.value)}
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
                onChange={(e) => setMfgEvent(e.target.value)}
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
            onKeyDown={handleKey}
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
          <div className="w-[80px]">
            <ButtonProgress handleOnClick={handleClick} />
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default ModalTemplate;
