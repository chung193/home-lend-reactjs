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
import useStyles from './configuration-jss';
import messages from './messages';
//import Index from '../../../components/Service/SettingAndFirmware/Index';
function Configuration(props) {
  const { classes, cx } = useStyles();
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

Configuration.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Configuration);
