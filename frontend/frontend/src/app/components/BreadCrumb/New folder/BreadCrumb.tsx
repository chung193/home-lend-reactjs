// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { Link, Route } from 'react-router-dom';
// import useStyles from './breadCrumb-jss';

// export interface Props {
//   theme: string;
//   separator: string;
//   location: Location;
// }

// function User(separator: any) {
//   let parts = location.pathname.split('/');
//           const place = parts[parts.length - 1];
//           parts = parts.slice(1, parts.length - 1);
//           return (
//             <p>
//               <span>
//                 {
//                   parts.map((part, partIndex) => {
//                     const path = ['', ...parts.slice(0, partIndex + 1)].join('/');
//                     return (
//                       <Fragment key={path}>
//                         <Link to={path}>{part}</Link>
//                         { separator }
//                       </Fragment>
//                     );
//                   })
//                 }
//                 &nbsp;
//                 {place}
//               </span>
//             </p>
//           );
// }

// function Breadcrumbs(props: Props) {
//   const { classes, cx }: any = useStyles();
//   const {
//     theme,
//     separator,
//     location
//   } = props;
//   return (
//     <section className={cx(theme === 'dark' ? classes.dark : classes.light, classes.breadcrumbs)}>
//       <Route
//         path="*"
//         children={<User separator= {separator}/>}
//       />
//     </section>
//   );
// };

// Breadcrumbs.propTypes = {
//   location: PropTypes.object.isRequired,
//   theme: PropTypes.string.isRequired,
//   separator: PropTypes.string.isRequired,
// };

// export default Breadcrumbs;