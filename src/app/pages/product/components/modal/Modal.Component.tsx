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
