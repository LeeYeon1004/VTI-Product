import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function SearchTemplate({
  getValue,
  handleSearch,
}: {
  getValue: (data: string) => void;
  handleSearch: () => void;
}) {
  const [value, setValue] = useState<string>('');
  getValue(value);
  const clickSearch = () => {
    handleSearch();
    setValue('');
  };
  const handleKey = (e: { key: string }) => {
    if (e.key === 'Enter') {
      clickSearch();
    }
  };
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
          onChange={(e) => setValue(e.target.value.toLowerCase())}
          onKeyDown={handleKey}
        />
        <Button
          sx={{ marginLeft: '8px', backgroundColor: '#0d6efd' }}
          variant="contained"
          onClick={clickSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
export default SearchTemplate;
