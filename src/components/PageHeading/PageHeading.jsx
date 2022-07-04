import PropTypes from 'prop-types';
import { PageTitle } from './PageHeading.slyled';

export default function PageHeading({ text }) {
  return <PageTitle>{text}</PageTitle>;
}

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};
