import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    padding: '12px',
  },
  '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
      borderColor: '',
    },
  '& .MuiFormLabel-root': {
    top: '-4px',
  },
});
function SearchTemplate() {
  return (
    <div className="">
      {/* search */}
      <div className="my-[12px] flex">
        <CssTextField
          sx={{ width: '300px' }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
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
