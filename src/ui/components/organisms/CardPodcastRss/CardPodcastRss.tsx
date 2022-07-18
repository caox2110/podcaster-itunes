import {
  MuiCard,
  CardActionAreaWithRoutingPodcast,
  MuiCardMedia,
  MuiCardContent,
  MuiTypography,
  PreloadImages,
} from '../..';

interface CardPodcastProperties {
  actionRoute: string;
  title: string;
  image: string;
  author: string;
}

export default function CardPodcastRss({
  actionRoute,
  title,
  image,
  author,
}: CardPodcastProperties) {
  return (
    <MuiCard variant='podcastRss'>
      <CardActionAreaWithRoutingPodcast route={actionRoute}>
        <PreloadImages>
          {({ handleRemovePlaceholder }) => (
            <MuiCardMedia
              alt={title}
              component='img'
              image={image}
              onError={handleRemovePlaceholder}
              onLoad={handleRemovePlaceholder}
            />
          )}
        </PreloadImages>
        <MuiCardContent sx={{ flexGrow: 1, paddingTop: 0 }}>
          <MuiTypography
            gutterBottom
            align='center'
            data-testid={`cardTitle-${title}`}
            display='block'
            sx={{ fontWeight: 'bold' }}
            variant='button'
          >
            {title}
          </MuiTypography>
          <MuiTypography
            gutterBottom
            align='center'
            color='text.secondary'
            data-testid={`cardAuthor-${title}`}
            variant='body2'
          >
            Author: {author}
          </MuiTypography>
        </MuiCardContent>
      </CardActionAreaWithRoutingPodcast>
    </MuiCard>
  );
}
