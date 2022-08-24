import ModalTemplate from './Modal.Template';

interface Props {
  open: boolean;
  handleClose: () => void;
}
function ModalComponent({ open, handleClose }: Props) {
  return (
    <div>
      <ModalTemplate props={open} handleClose={handleClose} />
    </div>
  );
}
export default ModalComponent;
