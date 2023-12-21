import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock } from 'enl-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Feature, FeatureBanner } from 'enl-components-frontend/Homepage/section/feature';
import { CarouselList, Slideshow, CarouselCenter } from 'enl-components-frontend/Carousel';
import { Services } from 'enl-components-frontend/Homepage/section/services';
import { Suggest } from 'enl-components-frontend/Homepage/section/suggest';
import Model3D from 'enl-components-frontend/mode3D';

import messages from './messages';

function HomePage(props) {
  const title = brand.name + ' - Blank Page';
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
      <Feature/>
      <FeatureBanner/>
      <CarouselList/>
      <Slideshow/>
      <Services/>
      <Suggest/>
      <CarouselCenter/>
      <Model3D/>
    </div>
  );
}

HomePage.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(HomePage);
