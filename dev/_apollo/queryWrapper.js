import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { AppLoader } from 'components/app';

const openLoader = customizedLoader => customizedLoader || AppLoader();

// @return data, rest
const QueryWrapper = props => {
  const { query, options = {}, customizedLoader, renderer } = props;
  const { loading, error, data, ...rest } = useQuery(query, options);

  return error ? AppLoader(error) : (loading ? openLoader(customizedLoader) : renderer({ data, ...rest }));
}

QueryWrapper.propTypes = {
  query: PropTypes.object.isRequired,
  options: PropTypes.object,
  customizedLoader: PropTypes.element,
  renderer: PropTypes.func.isRequired,
}

export default QueryWrapper;