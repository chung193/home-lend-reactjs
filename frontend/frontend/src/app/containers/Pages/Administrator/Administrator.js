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
import Button from '@mui/material/Button';
import useStyles from './administrator-jss';
import messages from './messages';
import Identity from './tabs/Identity';
import User from './tabs/User';
import Tree from 'enl-components/Tree/Tree';


function Administrator(props) {
  const { classes, cx } = useStyles();
  const [value, setValue] = React.useState('1');  
  const title = brand.name + ' - Tab template';
  const description = brand.desc;
  const { intl } = props;
  var bl = new blogic();

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
            <Tab label="Identity management" value="1" />
            <Tab label="User management" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Identity/></TabPanel>
        <TabPanel value="2"><User/></TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}

Administrator.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Administrator);
