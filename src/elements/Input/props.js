import PropTypes from 'prop-types';

export const propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,

  placeholder: PropTypes.string,
  value: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
