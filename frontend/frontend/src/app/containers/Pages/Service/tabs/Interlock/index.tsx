// import React from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import HeaderTable from '../../HeaderTable';
// import Body from '../../Body';
// import { injectIntl, FormattedMessage } from 'react-intl';
// import messages from './messages';
// import dataHeader from 'enl-api/api/dummy/interlockDataHeader'
// import dataBody from 'enl-api/api/dummy/interlockDataBody'

// const brand = {
//   name: 'Proteo',
//   desc: 'Proteo project',
//   prefix: 'Proteo',
//   footerText: 'Proteo All Rights Reserved 2020',
//   logoText: 'Proteo',
// };

// function InterlockPage(props: any) {
//   const title = brand.name + ' - Interlock Page';
//   const description = brand.desc;
//   const { intl } = props;
//   return (
//     <div>
//       <Helmet>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="twitter:title" content={title} />
//         <meta property="twitter:description" content={description} />
//       </Helmet>
//       <table className="">
//           <HeaderTable dataHeader={dataHeader} />
//           <Body dataBody={dataBody} dataHeader={dataHeader} /> 
//       </table>
//     </div>
//   );
// }

// InterlockPage.propTypes = { intl: PropTypes.object.isRequired };

// export default injectIntl(InterlockPage);
