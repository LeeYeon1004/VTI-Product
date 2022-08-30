import { Modal, Typography, TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IModal } from '../../models/modal.interface';
import { Dayjs } from 'dayjs';

function ModalTemplate({
  open,
  handleClose,
  handlePostItem,
  sendItem,
  check,
  handleEdit,
}: IModal) {
  // const [nameEvent, setNameEvent] = useState<string>('');
  // const [priceEvent, setPriceEvent] = useState<number>(0);
  // const [mfgEvent, setMfgEvent] = useState<Dayjs | null>();
  // const [brandEvent, setBrandEvent] = useState<string>('');
  // put
  // useEffect(() => {
  //   if (sendItem) {
  // setNameEvent(sendItem.name);
  // setPriceEvent(sendItem.price);
  // setMfgEvent(sendItem.mfg as unknown as Dayjs | null);
  // setBrandEvent(sendItem.brand);
  // }
  // }, [sendItem]);
  // const handlePut = () => {
  // const objectItem = {
  // name: nameEvent,
  // price: priceEvent,
  // mfg: mfgEvent + '',
  // brand: brandEvent,
  //   };
  //   handleEdit(objectItem);
  // };
  // -------------------
  // add
  // const handlePost = () => {
  //   const objectItem = {
  // name: nameEvent,
  // price: priceEvent,
  // mfg: mfgEvent + '',
  // brand: brandEvent,
  //   };
  //   handlePostItem(objectItem);
  // };
  // const handleCheck = () => {
  //   if (check === true) {
  //     handlePut();
  //   } else {
  //     handlePost();
  //   }
  // };
  // const handleClick = () => {
  //   const handleTimeout = setTimeout(() => {
  // handleCheck();
  // handleClose();
  // setNameEvent('');
  // setPriceEvent(0);
  // setMfgEvent(null);
  // setBrandEvent('');
  //   }, 2000);
  //   return () => clearTimeout(handleTimeout);
  // };
  // -------------------
  // fix lại handlekey
  // const handleKey = (e: { key: string }) => {
  //   if (e.key === 'Enter') {
  //     handleClick();
  //   }
  // };
  // get date picker
  // const handlePicker = (e: Dayjs | null) => {
  //   setMfgEvent(e);
  // };
  // formik
  console.log(sendItem);
  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      mfg: '',
      brand: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Mininum 2 characters')
        .max(15, 'Maximum 15 characters')
        .required('Required!'),
      price: Yup.number().required('Required!'),
      mfg: Yup.date().required('Required!'),
      brand: Yup.string().required('Required!'),
    }),
    onSubmit: (values) => {
      const objectItem = {
        name: values.name,
        price: values.price,
        mfg: values.mfg + '',
        brand: values.brand,
      };
      if (check === true) {
        console.log(objectItem);
        handleEdit(objectItem);
        handleClose();
      } else {
        handlePostItem(objectItem);
        handleClose();
      }
    },
  });

  // ------------------
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#fff] m-auto flex flex-col max-w-[500px] p-[24px] rounded-[4px] shadow-xl"
      >
        {/* name */}
        <div className="flex flex-col">
          <div className="flex items-center">
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
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="text-[14px] text-[red] ml-[80px] mb-[12px]">
            {formik.errors.name && formik.touched.name && (
              <p>{formik.errors.name}</p>
            )}
          </div>
        </div>
        {/* Price */}
        <div className="flex flex-col">
          <div className="flex items-center">
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
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </div>
          <div className="text-[14px] text-[red] ml-[80px] mb-[12px]">
            {formik.errors.price && formik.touched.price && (
              <p>{formik.errors.price}</p>
            )}
          </div>
        </div>
        {/* Mfg.Date */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <Typography
              sx={{ width: '68px', marginRight: '12px', fontSize: '16px' }}
            >
              Mfg.Date
            </Typography>
            <div className="flex-1">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  renderInput={(params) => (
                    <TextField size="small" {...params} name="mfg" />
                  )}
                  value={formik.values.mfg as unknown as Dayjs}
                  onChange={(value) => formik.setFieldValue('mfg', value, true)}
                />
                <div className="text-[14px] text-[red] mb-[12px]">
                  {formik.errors.mfg && formik.touched.mfg && (
                    <p>{formik.errors.mfg}</p>
                  )}
                </div>
              </LocalizationProvider>
            </div>
          </div>
        </div>
        {/* Brand */}
        <div className="flex flex-col">
          <div className="flex items-center">
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
              type="text"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
            />
          </div>
          <div className="text-[14px] text-[red] ml-[80px] mb-[12px]">
            {formik.errors.brand && formik.touched.brand && (
              <p>{formik.errors.brand}</p>
            )}
          </div>
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
            <button
              className="ml-[8px] p-[12px] bg-[#0d6efd] text-[#fff] h-[36px] flex items-center rounded-[4px] hover:bg-[#1565c0]"
              type="submit"
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
export default ModalTemplate;
