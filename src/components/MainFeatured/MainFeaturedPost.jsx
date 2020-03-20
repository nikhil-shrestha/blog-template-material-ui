import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

export default function MainFeaturedPost({ post }) {
  const classes = useStyles();
  const { total, deaths, recovered } = post;
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.rowContainer}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom align="center">
          Coronavirus Cases:
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          {total}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" paragraph align="center">
          Deaths:
        </Typography>
        <Typography variant="body1" paragraph align="center">
          {deaths}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" paragraph align="center">
          Recovered:
        </Typography>
        <Typography variant="body2" paragraph align="center">
          {recovered}
        </Typography>
      </Grid>
    </Grid>
  );
}

MainFeaturedPost.propTypes = {};
