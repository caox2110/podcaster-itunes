import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { MuiBox, MuiToolbar, MuiTypography, MuiButton, MuiIconButton, MuiMenuIcon } from '..';

import MuiAppBar from '.';

const Template: ComponentStory<typeof MuiAppBar> = (properties) => (
  <MuiBox sx={{ display: 'flex' }}>
    <MuiAppBar component='nav' {...properties}>
      <MuiToolbar>
        <MuiIconButton aria-label='menu' color='primary' edge='start' size='large' sx={{ mr: 2 }}>
          <MuiMenuIcon />
        </MuiIconButton>
        <MuiTypography color='primary' component='div' sx={{ flexGrow: 1 }} variant='h6'>
          News
        </MuiTypography>
        <MuiButton color='primary'>Login</MuiButton>
      </MuiToolbar>
    </MuiAppBar>
    <MuiBox component='main' sx={{ p: 3 }}>
      <MuiToolbar />
      <MuiTypography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius,
        perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio
        enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
        exercitationem, at ab sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima
        ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam at
        officia sapiente porro maxime corrupti perspiciatis asperiores, exercitationem eius nostrum
        consequuntur iure aliquam itaque, assumenda et! Quibusdam temporibus beatae doloremque
        voluptatum doloribus soluta accusamus porro reprehenderit eos inventore facere, fugit,
        molestiae ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
        soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem! Cumque, eligendi
        unde aliquid minus quis sit debitis obcaecati error, delectus quo eius exercitationem
        tempore. Delectus sapiente, provident corporis dolorum quibusdam aut beatae repellendus est
        labore quisquam praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
        deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium
        doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore molestiae
        dicta blanditiis est expedita eius debitis cupiditate porro sed aspernatur quidem, repellat
        nihil quasi praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
        voluptate iure labore, repellendus beatae quia unde est aliquid dolor molestias libero.
        Reiciendis similique exercitationem consequatur, nobis placeat illo laudantium! Enim
        perferendis nulla soluta magni error, provident repellat similique cupiditate ipsam, et
        tempore cumque quod! Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate
        iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
        reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil aliquam
        in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi
        porro a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis
        libero dolorem dolores sunt inventore perferendis, aut sapiente modi nesciunt.
      </MuiTypography>
    </MuiBox>
  </MuiBox>
);

const AppBarFixed = Template.bind({});
AppBarFixed.args = { position: 'fixed' };
const AppBarAbsolute = Template.bind({});
AppBarAbsolute.args = { position: 'absolute' };
const AppBarSticky = Template.bind({});
AppBarSticky.args = { position: 'sticky' };
const AppBarStatic = Template.bind({});
AppBarStatic.args = { position: 'static' };
const AppBarRelative = Template.bind({});
AppBarRelative.args = { position: 'relative' };

export { AppBarFixed, AppBarAbsolute, AppBarSticky, AppBarStatic, AppBarRelative };
export default {
  title: 'UI/Atoms/AppBar',
  component: MuiAppBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      type: { name: 'string' },
      defaultValue: '',
      control: 'text',
    },
    elevation: {
      type: { name: 'number' },
      defaultValue: 1,
      control: 'number',
    },
    enableColorOnDark: {
      type: { name: 'boolean' },
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    position: {
      control: false,
    },
    square: {
      type: { name: 'boolean' },
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    variant: {
      type: { name: 'string' },
      defaultValue: 'podcastRss',
    },
  },
} as ComponentMeta<typeof MuiAppBar>;
