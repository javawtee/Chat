import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { AppLoader } from 'components/app';

const openLoader = customizedLoader => customizedLoader || AppLoader();

const MutationWrapper = props => {
  //return error ? AppLoader(error) : loading ? openLoader(customizedLoader) : 
  const { actionName, query, customizedLoader, renderer } = props;
  const mutationValues = useMutation(query);
  const action = { [actionName]: mutationValues[0] };
  const { loading, error, data, ...rest } = mutationValues[1];

  return renderer(...action, data, rest);
}

MutationWrapper.propTypes = {
  actionName: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
  customizedLoader: PropTypes.element,
  renderer: PropTypes.func.isRequired,
}

export default MutationWrapper;