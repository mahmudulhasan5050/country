import React,{useState} from 'react';
import MTableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useDispatch } from 'react-redux';

import {orderManage} from '../../redux/actions';

const headElements = [
  'Flags',
  'Country Name',
  'Population',
  'Region',
  'Favorite',
];


const MuiTableHead = () => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const dispatch = useDispatch();

const sortCountry = (order:string) =>{
if(order === 'asc'){
  dispatch(orderManage('desc'));
  setOrder('desc')
}
else{
  dispatch(orderManage('asc'));
  setOrder('asc')
}
}
  return (
    <MTableHead>
      <TableRow sx={{ backgroundColor: 'gray' }}>
        {headElements.map((item, i) => {
          return (
            <TableCell
              key={item}
              align={headElements.length - 1 === i ? 'right' : 'left'}
            >
              {item === 'Country Name' ? (
                <TableSortLabel
                active={true}
                direction={order}
                onClick={() => sortCountry(order)} >{item}</TableSortLabel>)
               : item}
            </TableCell>
          );
        })}
      </TableRow>
    </MTableHead>
  );
};

export default MuiTableHead;
