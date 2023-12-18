import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import InterlockHeader from './InterlockHeader';
import InterlockBody from './InterlockBody';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import dataHeader from '../../../api/dummy/interlockDataHeader'
import dataBody from '../../../api/dummy/interlockDataBody'
import useStyles from './interlock-jss';
import './interlock.scss';

const brand = {
  name: 'Proteo',
  desc: 'Proteo project',
  prefix: 'Proteo',
  footerText: 'Proteo All Rights Reserved 2020',
  logoText: 'Proteo',
};
//const { classes } = useStyles();

function InterlockPage(props: any) {
  const title = brand.name + ' - Interlock Page';
  const description = brand.desc;
  const { intl } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <table  >
          <InterlockHeader dataHeader={dataHeader} />
          <InterlockBody dataBody={dataBody} dataHeader={dataHeader} /> 
      </table>
    </div>
  );
}

InterlockPage.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(InterlockPage);
