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
import useStyles from './Alarm-jss';
import messages from './messages';
// import Index from '../../../components/Service/SettingAndFirmware/Index';
function Alarm(props) {
  const { classes, cx } = useStyles();
  const [value, setValue] = React.useState('1');  
  const title = brand.name + ' - Tab template';
  const description = brand.desc;
  const { intl } = props;
  var bl = new blogic();

  React.useEffect(() => {
  }, []);



  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
    </div>
  );
}

Alarm.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Alarm);
