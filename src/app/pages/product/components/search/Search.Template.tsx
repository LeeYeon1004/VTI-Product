import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function SearchTemplate() {
  const [value, setValue] = useState<string>('');
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
        >
          Search
        </Button>
      </div>
    </div>
  );
}
export default SearchTemplate;
