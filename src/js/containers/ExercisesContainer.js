import Exercises from '../components/Exercises';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises.list
  };
};

export default connect(
  mapStateToProps
)(Exercises);