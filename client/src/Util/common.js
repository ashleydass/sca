import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/rootReducer';
import { middlewares } from '../store/createStore';

export const findByTestAttribute = (component, attr) => component.find(`[data-test='${attr}']`);

// eslint-disable-next-line react/forbid-foreign-prop-types
export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};