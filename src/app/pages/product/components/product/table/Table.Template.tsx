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
      {/* table */}
      <div className=" flex m-auto">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Index
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
                <TableCell>1</TableCell>
                <TableCell>2</TableCell>
                <TableCell>3</TableCell>
                <TableCell>4</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
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
