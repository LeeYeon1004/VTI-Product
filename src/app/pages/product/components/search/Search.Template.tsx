import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function SearchTemplate({
  getValue,
  handleSearch,
  handleAction,
}: {
  getValue: (data: string) => void;
  handleSearch: () => void;
  handleAction: () => void;
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
      <div className="mt-[12px] mb-[8px] flex">
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
        <div className="">
          <Button
            sx={{ marginLeft: '8px', backgroundColor: '#0d6efd' }}
            variant="contained"
            onClick={() => {
              clickSearch();
              handleAction();
            }}
            type="submit"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SearchTemplate;
