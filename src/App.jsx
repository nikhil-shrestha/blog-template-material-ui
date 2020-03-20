import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios';
import { Main } from './layouts';
import { MainFeatured, FeatureCard, Sidebar, Country } from './components';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

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

  const [ttlCases, setTtlCases] = useState(0);
  const [ttlDeath, setTtlDeath] = useState(0);
  const [ttlRecovery, setTtlRecovery] = useState(0);
  const [ttlActive, setTtlActive] = useState(0);
  const [ttlSerious, setTtlSerious] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://coronavirus-19-api.herokuapp.com/countries'
        );

        let totalCases1 = 0;
        let totalDeaths1 = 0;
        let totalRecovery1 = 0;
        let totalActive1 = 0;
        let totalSerious1 = 0;

        data.forEach(item => {
          totalCases1 += parseInt(item.cases);
          totalDeaths1 += parseInt(item.deaths);
          totalRecovery1 += parseInt(item.recovered);
          totalActive1 += parseInt(item.active);
          totalSerious1 += parseInt(item.critical);
        });

        setTtlCases(totalCases1);
        setTtlDeath(totalDeaths1);
        setTtlRecovery(totalRecovery1);
        setTtlActive(totalActive1);
        setTtlSerious(totalSerious1);

        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Main>
      <Grid container spacing={4} className={classes.mainGrid}>
        <Grid item xs={12} md={9}>
          <MainFeatured
            cases={ttlCases}
            deaths={ttlDeath}
            recovered={ttlRecovery}
          />
          <Grid container justify="space-around" spacing={4}>
            <FeatureCard
              title="ACTIVE CASES"
              count={ttlActive + ttlSerious}
              cond1={ttlActive}
              percent1={95}
              desc1="in Mild Condition"
              cond2={ttlSerious}
              percent2={5}
              desc2="Serious or Critical"
            />
            <FeatureCard
              title="CLOSED CASES"
              count={ttlRecovery + ttlDeath}
              cond1={ttlRecovery}
              percent1={90}
              desc1="Recovered / Discharged"
              cond2={ttlDeath}
              percent2={10}
              desc2="Deaths"
            />
          </Grid>

          <Country key={data.country} data={data} />
        </Grid>

        <Grid item xs={12} md={3}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Grid>
    </Main>
  );
}
