import styled from '@emotion/styled';
import { Box, Modal, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
};
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
interface IProps {
  props: boolean;
  handleClose: () => void;
}
function ModalTemplate({ props, handleClose }: IProps) {
  const [nameEvent, setNameEvent] = useState<string>('');
  const [priceEvent, setPriceEvent] = useState<string>('');
  const [mfgEvent, setMfgEvent] = useState<string>('');
  const [brandEvent, setBrandEvent] = useState<string>('');
  const [productItem, setProductItem] = useState<any>();

  const handleAdd = () => {
    setProductItem({
      name: nameEvent,
      price: priceEvent,
      mfg: mfgEvent,
      brand: brandEvent,
    });
    handleClose();
  };
  const handlePostItem = async () => {
    // await HttpService.post('product/create', productItem);
    console.log(productItem);
  };
  console.log(productItem);
  const handleClick = () => {
    handleAdd();
    handlePostItem();
    // setNameEvent('');
    // setPriceEvent('');
    // setMfgEvent('');
    // setBrandEvent('');
  };
  // fix lại handlekey
  const handleKey = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleAdd();
      handleClose();
    }
  };
  return (
    <div>
      <div>
        <Modal
          open={props}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center mb-[12px]">
              {/* name */}
              <Typography
                sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
              >
                Name
              </Typography>
              <CssTextField
                autoFocus={true}
                sx={{ flex: '1' }}
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
              <CssTextField
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
              <CssTextField
                type="date"
                sx={{ flex: '1' }}
                id="outlined-basic"
                variant="outlined"
                value={mfgEvent}
                onChange={(e) => setMfgEvent(e.target.value)}
              />
            </div>
            {/* Brand */}
            <div className="flex items-center mb-[12px]">
              <Typography
                sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
              >
                Brand
              </Typography>
              <CssTextField
                sx={{ flex: '1' }}
                id="outlined-basic"
                variant="outlined"
                onKeyDown={handleKey}
                value={brandEvent}
                onChange={(e) => setBrandEvent(e.target.value)}
              />
            </div>
            {/* button */}
            <div className="text-right">
              <Button
                className="w-[80px]"
                onClick={handleClose}
                variant="outlined"
                color="error"
              >
                CANCEL
              </Button>
              <Button
                className="w-[80px]"
                sx={{ marginLeft: '12px' }}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                ADD
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
export default ModalTemplate;
