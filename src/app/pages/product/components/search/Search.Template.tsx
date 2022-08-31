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
    // const e = event || window.event;
    // e.preventDefault();
  };
  const handleKey = (e: { key: string }) => {
    if (e.key === 'Enter') {
      clickSearch();
    }
  };
  console.log('reload');

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
        <div className="group">
          <Button
            sx={{ marginLeft: '8px', backgroundColor: '#0d6efd' }}
            variant="contained"
            onClick={clickSearch}
            type="submit"
          >
            Search
          </Button>
          <div className="mb-[12px] hidden group-focus:block">
            Kết quả tìm kiếm cho: "{value}"
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchTemplate;
