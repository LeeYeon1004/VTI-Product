import { useEffect, useState } from 'react';
import { HttpService } from '../../../../shared/services/http.service';
import { Product } from '../../models/product.interface';
import TableTemplate from './Table.Template';

function TableComponent() {
  const [listData, setListData] = useState<Product[]>([]);

  useEffect(() => {
    handleGetList();
  }, []);
  const handleGetList = async () => {
    const getList = await HttpService.get('product/list');
    setListData(getList.data.data);
  };
  const handleRemove = async () => {
    // await HttpService.delete('product/delete');
    console.log('delete');
  };
  return (
    <div>
      <TableTemplate handleRemove={handleRemove} listData={listData} />
    </div>
  );
}
export default TableComponent;
