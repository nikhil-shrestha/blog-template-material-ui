import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    100.81
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders(props) {
  console.log('props>>', props);
  const { data } = props;
  console.log('data>', data);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Country</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Country, other</TableCell>
            <TableCell>Total Cases</TableCell>
            <TableCell>New Cases</TableCell>
            <TableCell>Total Deaths</TableCell>
            <TableCell>New Deaths</TableCell>
            <TableCell>Total Recovered</TableCell>
            <TableCell>Active Cases</TableCell>
            <TableCell>Serioius Critical</TableCell>
            <TableCell>Total Cases/ 1M pop</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 &&
            data.map(row => (
              <TableRow key={row.country}>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.cases}</TableCell>
                <TableCell>{row.todayCases}</TableCell>
                <TableCell>{row.deaths}</TableCell>
                <TableCell>{row.todayDeaths}</TableCell>
                <TableCell>{row.recovered}</TableCell>
                <TableCell>{row.active}</TableCell>
                <TableCell>{row.critical}</TableCell>
                <TableCell>{row.casesPerOneMillion}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
