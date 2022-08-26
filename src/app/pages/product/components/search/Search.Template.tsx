import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Product } from '../../models/product.interface';

function SearchTemplate({
  handleSearch,
  newList,
}: {
  handleSearch: (data: string) => void;
  newList: Product[];
}) {
  const [value, setValue] = useState<string>('');
  console.log(newList);
  return (
    <div className="">
      <div className="my-[12px] flex">
        <TextField
          sx={{ width: '300px' }}
          size="small"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          sx={{ marginLeft: '8px', backgroundColor: '#0d6efd' }}
          variant="contained"
          onClick={() => handleSearch(value)}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
export default SearchTemplate;
