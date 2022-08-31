import { Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import { Product } from '../../models/product.interface';
import { HttpService } from '../../../../shared/services/http.service';

function PaginationPage({ getPage }: { getPage: (data: number) => void }) {
  const PageNumber = (event: React.ChangeEvent<unknown>, page: number) => {
    getPage(page);
    console.log(event);
  };
  const [listData, setListData] = useState<Product[]>([]);
  useEffect(() => {
    handleGet();
  }, []);
  const handleGet = async () => {
    const getList = await HttpService.get('/product/list');
    setListData(getList.data);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(listData.length / 6)}
        color="primary"
        onChange={(event, page) => PageNumber(event, page)}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
export default PaginationPage;
