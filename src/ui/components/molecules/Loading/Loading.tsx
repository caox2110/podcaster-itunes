import { MuiContainer, MuiLinearProgress, MuiCircularProgress } from '../..';

/**
 * Loading Types Options
 *
 * @enum {number}
 */
enum LoadingTypeEnum {
  circular = 'circular',
  linear = 'linear',
}

type LoadingProperties = { type?: LoadingTypeEnum };

/**
 * Loading Component definition.
 *
 * @param {{ type?: LoadingTypeEnum }} { type, ...rest }
 * @returns
 */
function Loading({ type, ...rest }: LoadingProperties) {
  switch (type) {
    case LoadingTypeEnum.circular:
      return <MuiCircularProgress {...rest} disableShrink />;
    default:
      return (
        <MuiContainer maxWidth='lg' sx={{ py: 10 }}>
          <MuiLinearProgress {...rest} />
        </MuiContainer>
      );
  }
}

/**
 * Default values for loading component props
 *
 * @type {{ type: LoadingTypeEnum; }}
 */
const defaultProps = { type: LoadingTypeEnum.linear };

Loading.defaultProps = defaultProps;

export { LoadingTypeEnum };
export default Loading;
