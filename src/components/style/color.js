import PropTypes from 'prop-types';

const color = {
  redbag: '#FF5F5F',
  red: '#FF5F5F',
  orange: '#FF6700',
  yellow: '#FFB300',
  green: '#07CF93',
  blue: '#5891EF',
  purple: '#DA59E9',
  textDark: '#444',
  textNoraml: '#666666',
  textLight: '#999999',
  textDeactive: '#BBBFC8',
  placeholder: '#CACACA',
  split: '#eee',
  bgDeactive: '#D6D9E0',
  bgNotice: '#FAFBFB',
  bgPage: '#F8F8F8',
  white: '#FFF',
  gold: '#D2BA8A',
  silvery: '#BDC4CF',
  cooper: '#DD9D78',
};
color.link = color.blue;
color.primary = color.orange;

const gradient = {
  redbag: deg => gradientBuild(deg, ['#FF5F5F', '#FF7443']),
  red: deg => gradientBuild(deg, ['#FF5F5F', '#FFA675']),
  yellow: deg => gradientBuild(deg, ['#FBB20F', '#FED40D']),
  orange: deg => gradientBuild(deg, ['#FF6700', '#FFA000']),
  green: deg => gradientBuild(deg, ['#07CF93', '#60EA80']),
  blue: deg => gradientBuild(deg, ['#3F94F7', '#00B6FF']),
  purple: deg => gradientBuild(deg, ['#CC52E3', '#EC62F0']),
  gold: deg => gradientBuild(deg, ['#D2BA8A', '#E3CEA1']),
  silvery: deg => gradientBuild(deg, ['#BDC4CF', '#E2E0DB']),
  cooper: deg => gradientBuild(deg, ['#DD9D78', '#F2C8AE']),
};

gradient.primary = gradient.orange;

const gradientBuild = (deg = 45, color) =>
  `linear-gradient(${deg}deg, ${color[0]} 0%, ${color[1]} 100%)`;

gradientBuild.propTypes = { deg: PropTypes.number };

export { color, gradient };
