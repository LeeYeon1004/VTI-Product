import { ITables } from '../../models/table.interface';
import TableTemplate from './table.template';

function TableComponent({
  handleRemove,
  getItem,
  handleOpen,
  checkEdit,
  newList,
  getPage,
}: ITables) {
  return (
    <div>
      <TableTemplate
        getItem={getItem}
        handleRemove={handleRemove}
        handleOpen={handleOpen}
        checkEdit={checkEdit}
        newList={newList}
        getPage={getPage}
      />
    </div>
  );
}
export default TableComponent;
