import ProductTemplate from './Product.Template';
import { createContext, useEffect, useState } from 'react';
import { Product } from '../../models/product.interface';
import { HttpService } from '../../../../shared/services/http.service';

export const AddContext = createContext<Product[]>([]);
function ProductComponent() {
  const [open, setOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [sendItem, setItem] = useState<Product>();
  // call api
  const [listData, setListData] = useState<Product[]>([]);
  useEffect(() => {
    handleGetList();
  }, []);
  const handleGetList = async () => {
    const getList = await HttpService.get('product/list');
    // setListData(getList.data.data); --> cty
    setListData(getList.data);
  };
  // ---------
  //  post
  const handlePostItem = async (item: Product) => {
    // await HttpService.post('product/create', {
    await HttpService.post('product/list', item);
    await handleGetList();
  };
  // ----------
  // delete
  const handleRemove = async (id: number | undefined) => {
    await HttpService.delete(`product/list/${id}`);
    await handleGetList();
  };
  // ----------------
  //  edit
  const getItem = (item: Product | undefined) => {
    setItem(item);
  };

  const handleEdit = async (item: Product) => {
    await HttpService.put(`product/list/${sendItem?.id}`, item);
    await handleGetList();
  };
  const checkEdit = () => {
    setCheck(true);
  };
  const checkAdd = () => {
    setCheck(false);
  };
  // -----------------
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ProductTemplate
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        listData={listData}
        handlePostItem={handlePostItem}
        handleRemove={handleRemove}
        getItem={getItem}
        sendItem={sendItem}
        checkAdd={checkAdd}
        checkEdit={checkEdit}
        check={check}
        handleEdit={handleEdit}
      />
    </div>
  );
}
export default ProductComponent;
