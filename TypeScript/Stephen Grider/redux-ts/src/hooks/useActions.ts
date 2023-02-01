import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch)
}

//
//The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
