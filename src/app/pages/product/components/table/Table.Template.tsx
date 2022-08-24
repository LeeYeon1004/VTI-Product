import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function TableTemplate() {
  return (
    <div>
      <div className=" flex m-auto">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  STT
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Email
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Start
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Contact
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Kim Woo Bin</TableCell>
                <TableCell>buihuuloi2000@gmail.com</TableCell>
                <TableCell>09/08/2022</TableCell>
                <TableCell>0971083244</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    sx={{ marginRight: '8px' }}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default TableTemplate;
