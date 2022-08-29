import { IModal } from '../../models/modal.interface';
import ModalTemplate from './modal.template';

function ModalComponent({
  open,
  handleClose,
  handlePostItem,
  sendItem,
  check,
  handleEdit,
}: IModal) {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     price: 0,
  //     mfg: "",
  //     brand: ""
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .min(2, "Mininum 2 characters")
  //       .max(15, "Maximum 15 characters")
  //       .required("Required!"),
  //     price: Yup.number().required("Required!"),
  //     mfg: Yup.string().required("Required!"),
  //     brand: Yup.string().required("Required!")
  //   })
  // });
  return (
    <div>
      <ModalTemplate
        open={open}
        handleClose={handleClose}
        handlePostItem={handlePostItem}
        sendItem={sendItem}
        check={check}
        handleEdit={handleEdit}
      />
    </div>
  );
}
export default ModalComponent;
