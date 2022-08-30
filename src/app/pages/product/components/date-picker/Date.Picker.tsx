import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
interface DatePic {
  getFromValue: (data: Date | null) => void;
  getToValue: (data: Date | null) => void;
  dateValue: () => void;
}
function DatePickerF({ getFromValue, getToValue, dateValue }: DatePic) {
  const [fromValue, setFromValue] = useState<Date | null>(null);
  const [toValue, setToValue] = useState<Date | null>(null);
  getFromValue(fromValue);
  getToValue(toValue);
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
      <div>
        <button
          className="ml-[12px] p-[12px] bg-[#0d6efd] text-[#fff] h-[40px] flex items-center rounded-[4px] hover:bg-[#1565c0]"
          onClick={dateValue}
        >
          OK
        </button>
      </div>
    </div>
  );
}
export default DatePickerF;
