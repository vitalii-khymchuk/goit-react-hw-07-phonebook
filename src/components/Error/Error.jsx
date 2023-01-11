import PropTypes from 'prop-types';
import { Box } from 'components/reusableComponents';

const Error = ({ msg }) => (
  <Box p={15}>
    <h1>OOOPS...</h1>
    <h2>Something went wrong</h2>
    <h2>Please reload page or check URL</h2>
    <p>Info: {msg}</p>
  </Box>
);

Error.propTypes = {
  msg: PropTypes.string,
};
export default Error;
