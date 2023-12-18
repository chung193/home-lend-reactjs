import React, { useState } from 'react';
import Setting from './Setting';
import Firmware from './Firmware';
import { injectIntl, FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import messages from './messages';

function Index(props) {
    //const { classes, cx } = useStyles();
    //const {} = props;
    const [value, setValue] = React.useState('1');  
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<FormattedMessage {...messages.settingTab}/>} value="1" />
            <Tab label={<FormattedMessage {...messages.firmwareTab}/>} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Setting/></TabPanel>
        <TabPanel value="2"><Firmware/></TabPanel>
      </TabContext>
    </Box>
        </>
    );
}

//Index.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(Index);
