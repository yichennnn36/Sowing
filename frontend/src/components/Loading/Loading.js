import { LoadingWrapper, LoadingIcon } from './LoadingStyle';

const Loading = ({ $error }) => {
  return (
    <LoadingWrapper $error={$error} >
      <LoadingIcon />
    </LoadingWrapper>
  )
};

export default Loading;
