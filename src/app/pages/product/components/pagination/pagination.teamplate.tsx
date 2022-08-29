import { Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PaginationPage({ getPage }: { getPage: (data: number) => void }) {
  const PageNumber = (event: React.ChangeEvent<unknown>, page: number) => {
    getPage(page);
    console.log(event);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
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
