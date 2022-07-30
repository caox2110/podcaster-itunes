/* eslint-disable max-len */
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { MuiGrid } from '../../atoms';
import { withVerticalCentered } from '../../../../../.storybook/preview';

import CardPodcastRss from '.';

const Template: ComponentStory<typeof CardPodcastRss> = (properties) => (
  <MuiGrid container justifyContent='center'>
    <MuiGrid md={6} xs={12}>
      <CardPodcastRss {...properties} />
    </MuiGrid>
  </MuiGrid>
);

const CardPodcastRssFull = Template.bind({});
CardPodcastRssFull.args = {
  actionRoute: '/podcast/1633466636',
  title: 'Angie Martinez IRL - Angie Martinez',
  image:
    'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/170x170bb.png',
  author: 'Angie Martinez',
};

export { CardPodcastRssFull };
export default {
  title: 'UI/Organisms/CardPodcastRss',
  component: CardPodcastRssFull,
  parameters: {
    layout: 'fullscreen',
    routePath: '/podcast/:id',
    routeParams: { id: '1633466636' },
  },
  decorators: [withVerticalCentered],
  argTypes: {
    actionRoute: {
      description: 'Route use to navigate to Podcast detail',
      control: 'text',
      table: {
        type: { summary: '/podcast/:id' },
        defaultValue: { summary: '/podcast/1633466636' },
      },
    },
    title: {
      description: 'Title of the Podcast',
      control: 'text',
      table: {
        type: { summary: 'Angie Martinez IRL - Angie Martinez' },
        defaultValue: { summary: '' },
      },
    },
    image: {
      description: 'Image of the Podcast',
      control: 'text',
      table: {
        type: {
          summary:
            'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/99/02/b4/9902b4d0-736e-d4c7-ed94-c96a375231a6/mza_8124322158375932950.jpg/170x170bb.png',
        },
        defaultValue: { summary: '' },
      },
    },
    author: {
      description: 'Author of the Podcast',
      control: 'text',
      table: {
        type: {
          summary: 'Angie Martinez',
        },
        defaultValue: { summary: '' },
      },
    },
  },
} as ComponentMeta<typeof CardPodcastRss>;
