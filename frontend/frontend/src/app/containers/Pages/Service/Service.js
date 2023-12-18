/* eslint-disable linebreak-style */
import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import blogic from './bl';
// import Button from '@mui/material/Button';
import useStyles from './service-jss';
import messages from './messages';
//import Index from './tabs/SettingAndFirmware/Index';
import Interlock from '../../../components/Service/Interlock/index.tsx';

function Service(props) {
  const { classes, cx } = useStyles();
  const [value, setValue] = React.useState('1');
  const title = brand.name + ' - Tab template';
  const description = brand.desc;
  const { intl } = props;
  // let api = new Common();
  // let bl = new blogic();

  React.useEffect(() => {
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={<FormattedMessage {...messages.paperTabMaintenance} />} value="1" />
              <Tab label={<FormattedMessage {...messages.paperTabTeaching}/>} value="2" />
              <Tab label={<FormattedMessage {...messages.paperTabInterlock}/>} value="3" />
              <Tab label={<FormattedMessage {...messages.paperTabSettingAndFirmware}/>} value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3"><Interlock/></TabPanel>
          {/* <TabPanel value="4"><Index/></TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
}

Service.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Service);
