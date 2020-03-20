import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { cases, deaths, recovered } = props;
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
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
          align="center"
        >
          {cases}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" paragraph align="center">
          Deaths:
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
          align="center"
        >
          {deaths}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" paragraph align="center">
          Recovered:
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
          align="center"
        >
          {recovered}
        </Typography>
      </Grid>
    </Grid>
  );
}

MainFeaturedPost.propTypes = {};
