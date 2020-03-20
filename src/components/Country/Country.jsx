import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders(props) {
  const classes = useStyles();
  const { data } = props;

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
