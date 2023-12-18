/*
 * Blank Page Messages
 *
 * This contains all the text for the Blank Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Pages.Service';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Services Page',
  },
  paperTitle: {
    id: `${scope}.paper.title`,
    defaultMessage: 'Services Page',
  },
  paperSubtitle: {
    id: `${scope}.paper.subtitle`,
    defaultMessage: 'Services page',
  },
  paperContent: {
    id: `${scope}.paper.content`,
    defaultMessage: 'Services content',
  },
  // tab
  paperTabMaintenance: {
    id: `${scope}.paper.tab.Maintenance`,
    defaultMessage: 'Maintenance',
  },

  paperTabTeaching: {
    id: `${scope}.paper.tab.Teaching`,
    defaultMessage: 'Teaching',
  },

  paperTabInterlock: {
    id: `${scope}.paper.tab.Interlock`,
    defaultMessage: 'Interlock',
  },
  paperTabSettingAndFirmware: {
    id: `${scope}.paper.tab.SettingAndFirmware`,
    defaultMessage: 'Setting And Firmware',
  },
});
