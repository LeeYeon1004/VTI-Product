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
import { Product } from '../../services/Interface';

function TableTemplate({ listData }: { listData: Product[] }) {
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
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Mfg.Date
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Brand
                </TableCell>
                <TableCell sx={{ fontSize: '15px', fontWeight: '600' }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.mfg}</TableCell>
                  <TableCell>{item.brand}</TableCell>
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default TableTemplate;
