import { useEffect, useState } from 'react';
import { HttpService } from '../../../../shared/services/http.service';
import { Product } from '../../models/product.interface';
import SearchTemplate from './Search.Template';

function SearchComponent() {
  const [list, setList] = useState<Product[]>([]);
  const [newList, setNewList] = useState<Product[]>([]);
  useEffect(() => {
    handleGetList();
  }, []);
  const handleGetList = async () => {
    const getList = await HttpService.get('product/list');
    setList(getList.data.data);
  };
  const handleSearch = (value: string) => {
    setNewList(list.filter((item) => item.name.includes(value)));
  };
  console.log(newList);

  return (
    <div>
      <SearchTemplate newList={newList} handleSearch={handleSearch} />
    </div>
  );
}
export default SearchComponent;
