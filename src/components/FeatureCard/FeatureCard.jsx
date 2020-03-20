import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  cardCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  }
}));

export default function FeaturCard(props) {
  const classes = useStyles();

  const {
    title,
    count,
    cond1,
    percent1,
    desc1,
    cond2,
    percent2,
    desc2
  } = props;

  return (
    <Grid item>
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <CardContent>
          <div className={classes.cardCount}>
            <Typography variant="h3" color="textPrimary">
              {count}
            </Typography>
          </div>

          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4" color="textPrimary">
                {cond1}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                ({percent1}%)
              </Typography>
              {desc1}
            </Grid>

            <Grid item>
              <Typography variant="h4" color="textPrimary">
                {cond2}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                ({percent2}%)
              </Typography>
              {desc2}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
