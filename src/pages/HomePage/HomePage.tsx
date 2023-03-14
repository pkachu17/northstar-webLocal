import React from "react";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { Toolbar } from "@mui/material";
import { Footer } from "../../components/Footer/Footer";
import HeroHomepage from "./HeroHomepage";
import TopRatedRoadMaps from "./TopRatedRoadMaps";
import RoadMapsTopics from "./RoadMapsTopics";
import MyRoadMaps from "./MyRoadMaps";
import RoadMapsByAuthors from "./RoadMapsByAuthors";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./HomePage.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const HomePage = () => {

  const isBigScreen = useMediaQuery('(min-width: 600px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Toolbar />
      <HeroHomepage />
      <Box style={{ width: '100%', height: '60vh', paddingLeft: isBigScreen ? '10%' : '5%', paddingRight: isBigScreen ? '10%' : '5%', paddingBottom: '5%', paddingTop: '0%' }}>
        <Box style={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Top Rated" {...a11yProps(0)} />
            <Tab label="By Topics" {...a11yProps(1)} />
            <Tab label="My Roadmaps" {...a11yProps(2)} />
            <Tab label="By Authors" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TopRatedRoadMaps />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RoadMapsTopics />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MyRoadMaps />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <RoadMapsByAuthors />
        </TabPanel>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
