import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Main } from './layouts';
import { MainFeatured, FeatureCard, Sidebar, Country } from './components';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const mainFeaturedPost = {
  total: '245,732',
  deaths: '10,046',
  recovered: '88,441'
};
const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
};

export default function Blog() {
  const classes = useStyles();

  return (
    <Main>
      <Grid container spacing={4} className={classes.mainGrid}>
        <Grid item xs={12} md={8}>
          <MainFeatured post={mainFeaturedPost} />
          <Grid container justify="space-around" spacing={4}>
            <FeatureCard
              title="ACTIVE CASES"
              count="147,245"
              cond1="139,867"
              percent1={95}
              desc1="in Mild Condition"
              cond2="7,378"
              percent2={5}
              desc2="Serious or Critical"
            />
            <FeatureCard
              title="CLOSED CASES"
              count="98,487"
              cond1="88,441"
              percent1={90}
              desc1="Recovered / Discharged"
              cond2="10,046"
              percent2={10}
              desc2="Deaths"
            />
          </Grid>

          <Country />
        </Grid>

        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </Main>
  );
}
