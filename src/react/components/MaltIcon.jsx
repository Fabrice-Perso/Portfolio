import PropTypes from 'prop-types';

const MaltIcon = ({ size = "1em", color = "#1e3758", background, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Malt"
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "rgba(173, 216, 230, 0.9)", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "rgba(173, 216, 230, 0.9)", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect
      width="512"
      height="512"
      rx="15%"
      fill="#1e3758"
    />
    <path
      fill="url(#grad1)"
      d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8 34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4-4.6-23.3-17.9-44.4-53.3-44.4-35.4 0-48.7 21.2-53.2 44.5 3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2 5 23.8 19 45.5 53.1 45.5 34.2 0 48.3-21.9 53.2-45.7-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5 0 34.3 21.9 48.3 45.8 53.2 2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6 0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2-25 25-19.4 49.4-6.2 69.1 4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3 24.2-24.2 18.7-49.7 5.3-70-4.3.3-123.2.6-123.2.6z"
    />
  </svg>
);

MaltIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  background: PropTypes.bool,
};

export default MaltIcon;
