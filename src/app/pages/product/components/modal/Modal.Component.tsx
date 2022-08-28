import { IModal } from '../../models/modal.interface';
import ModalTemplate from './Modal.Template';

function ModalComponent({
  open,
  handleClose,
  handlePostItem,
  sendItem,
  check,
  handleEdit,
}: IModal) {
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
