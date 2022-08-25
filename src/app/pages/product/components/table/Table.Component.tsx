import { useEffect, useState } from 'react';
import { HttpService } from '../../../../shared/services/http.service';
import { Product } from '../../services/Interface';
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
  return (
    <div>
      <TableTemplate listData={listData} />
    </div>
  );
}
export default TableComponent;
