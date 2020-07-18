import client from './client';
import QueryWrapper from './queryWrapper';
import MutationWrapper from './mutationWrapper';
import * as gasBook from './GasBook';

const gasBookGQL = { ...gasBook };

export {
  client,
  QueryWrapper,
  MutationWrapper,
  gasBookGQL
}