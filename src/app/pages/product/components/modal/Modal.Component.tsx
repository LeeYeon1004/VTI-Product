import ModalTemplate from './Modal.Template';

interface Props {
  open: boolean;
  handleClose: () => void;
  callFunc: (data: boolean) => void;
}
function ModalComponent({ open, handleClose, callFunc }: Props) {
  return (
    <div>
      <ModalTemplate
        callFunc={callFunc}
        props={open}
        handleClose={handleClose}
      />
    </div>
  );
}
export default ModalComponent;
