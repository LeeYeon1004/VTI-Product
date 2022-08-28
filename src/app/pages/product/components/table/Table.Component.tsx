import { ITables } from '../../models/table.interface';
import TableTemplate from './Table.Template';

function TableComponent({
  listData,
  handleRemove,
  getItem,
  handleOpen,
  checkEdit,
}: ITables) {
  return (
    <div>
      <TableTemplate
        getItem={getItem}
        handleRemove={handleRemove}
        listData={listData}
        handleOpen={handleOpen}
        checkEdit={checkEdit}
      />
    </div>
  );
}
export default TableComponent;
