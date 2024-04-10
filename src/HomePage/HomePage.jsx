import Hello from "../Hello";
import Overview from "../Overview/Overview"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderBottom: '0.3px solid grey',
  maxWidth:600,
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    minWidth: 300,
    backgroundColor: 'black'
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(40),
    color: 'grey',
    '&.Mui-selected': {
      color: 'black',
      fontWeight:'bold'
    },
  }),
);

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
    if(newValue===1){
      console.log("Hello World !");
    }
  };

  return (
    <>
      <Box sx={{mx:5}}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Overview">
          </StyledTab>
          <StyledTab label="Other"/>
        </StyledTabs>
      </Box>
     {value===0 && <Overview/>}
     {value===1 && <Hello/>}
     </>
  );
}