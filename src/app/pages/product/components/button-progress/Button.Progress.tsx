import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
function ButtonProgress() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const buttonSx = {
    ...(success && {
      bgcolor: blue[500],
      '&:hover': {
        bgcolor: blue[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1500);
    }
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          type="submit"
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={() => {
            handleButtonClick();
          }}
        >
          Add
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: blue[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
export default ButtonProgress;
