import {
  MuiCard,
  CardActionAreaWithNavigation,
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
      <CardActionAreaWithNavigation route={actionRoute}>
        {image && image.length > 0 && (
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
        )}
        {(title || author) && (
          <MuiCardContent sx={{ flexGrow: 1, paddingTop: 0 }}>
            {title && (
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
            )}
            {author && (
              <MuiTypography
                gutterBottom
                align='center'
                color='text.secondary'
                data-testid={`cardAuthor-${title}`}
                variant='body2'
              >
                Author: {author}
              </MuiTypography>
            )}
          </MuiCardContent>
        )}
      </CardActionAreaWithNavigation>
    </MuiCard>
  );
}
