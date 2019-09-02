import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (component, attr) => component.find(`[data-test='${attr}']`);

// eslint-disable-next-line react/forbid-foreign-prop-types
export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);