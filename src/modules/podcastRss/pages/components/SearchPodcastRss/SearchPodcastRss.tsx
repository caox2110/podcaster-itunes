import { MuiBox, MuiChip, MuiFormControl, TextField } from '@/ui';

import { usePodcastRss } from '../../../infrastructure';

export default function SearchPodcastRss() {
  const { podcastsRssQuery, searchInputProperties } = usePodcastRss();

  const { data } = podcastsRssQuery;

  return (
    <MuiBox
      noValidate
      autoComplete='off'
      component='form'
      sx={{
        bgcolor: 'background.paper',
        pt: 2,
        pb: 6,
        mb: 6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <MuiChip
        color='primary'
        label={data && data.length > 0 ? data.length : 0}
        sx={{
          mr: 2,
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      />
      <MuiFormControl sx={{ width: '60ch' }}>
        <TextField
          id='filter-podcast'
          label=''
          name='filter-podcast'
          placeholder='Filter podcasts'
          {...searchInputProperties}
        />
      </MuiFormControl>
    </MuiBox>
  );
}
