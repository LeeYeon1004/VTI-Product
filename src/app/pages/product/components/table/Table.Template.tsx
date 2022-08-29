import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import moment from 'moment';
import { ITables } from '../../models/table.interface';
import PaginationPage from '../pagination/pagination.teamplate';

function TableTemplate({
  handleRemove,
  getItem,
  handleOpen,
  checkEdit,
  newList,
  getPage,
}: ITables) {
  return (
    <div className=" flex m-auto flex-col">
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
              <TableCell
                sx={{ fontSize: '15px', fontWeight: '600', display: 'flex' }}
              >
                <div className="mr-[8px] hover:text-[gray] cursor-pointer">
                  <FontAwesomeIcon icon={faSort} />
                </div>
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
            {newList.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{moment(item.mfg).format('L')}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    sx={{ marginRight: '8px' }}
                    startIcon={<EditIcon />}
                    onClick={() => {
                      getItem(item);
                      handleOpen();
                      checkEdit();
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemove(item?.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-end mr-[16px] mt-[16px]">
        <PaginationPage getPage={getPage} />
      </div>
    </div>
  );
}
export default TableTemplate;
