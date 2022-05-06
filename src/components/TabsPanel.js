import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TabPanel = (props) => {
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
        <Box sx={{ p: 3 }}> {children} </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabsPanel({tabs=[] }) {
  /* props: {
      [{tabName, tabContent}, {tabName, tabContent}, {tabName, tabContent},...]
    }
  */
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => { setValue(newValue); };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          {tabs.map((tab, index) => {
            return(<Tab label={tab.name} id={`tab-${index}`} key={tab.name}/> );
          })}
        </Tabs>
      </Box>
      {tabs.map((tab,index)=>{
        return(
          <TabPanel value={value} index={index} key={index}> {tab.content} </TabPanel>
        );
      })}
    </Box>
  );
}
