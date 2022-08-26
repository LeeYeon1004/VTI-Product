import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
function DatePickerF() {
  const [fromValue, setFromValue] = useState<Date | null>(null);
  const [toValue, setToValue] = useState<Date | null>(null);
  return (
    <div className="flex mt-[12px]">
      <div className="mr-[8px]">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="From"
            value={fromValue}
            onChange={(newValue) => {
              setFromValue(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="To"
            value={toValue}
            onChange={(newValue) => {
              setToValue(newValue);
            }}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
export default DatePickerF;
