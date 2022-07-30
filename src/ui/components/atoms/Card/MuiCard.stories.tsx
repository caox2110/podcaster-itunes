/* eslint-disable max-len */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { withVerticalCentered } from '../../../../../.storybook/preview';
import { MuiCardMedia, MuiCardContent, MuiTypography, MuiCardActions, MuiButton } from '..';

import MuiCard from '.';

const Template: ComponentStory<typeof MuiCard> = (properties) => (
  <MuiCard sx={{ maxWidth: 300 }} {...properties}>
    <MuiCardMedia
      alt='Angie Martinez IRL - Angie Martinez'
      component='img'
      height='140'
      image='https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/170x170bb.png'
    />
    <MuiCardContent>
      <MuiTypography gutterBottom component='div' variant='h5'>
        Lizard
      </MuiTypography>
      <MuiTypography color='text.secondary' variant='body2'>
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
        all continents except Antarctica
      </MuiTypography>
    </MuiCardContent>
    <MuiCardActions>
      <MuiButton size='small'>Share</MuiButton>
      <MuiButton size='small'>Learn More</MuiButton>
    </MuiCardActions>
  </MuiCard>
);

const CardNormal = Template.bind({});
CardNormal.args = {};

const CardOutlined = Template.bind({});
CardOutlined.args = { variant: 'outlined' };

const CardPodcastRss = Template.bind({});
CardPodcastRss.args = { variant: 'podcastRss' };

export { CardNormal, CardOutlined, CardPodcastRss };
export default {
  title: 'UI/Atoms/Card',
  component: MuiCard,
  decorators: [withVerticalCentered],
} as ComponentMeta<typeof MuiCard>;
