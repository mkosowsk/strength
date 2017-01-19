
import Squat from '../components/Squat';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    squatExercises: state.squatExercises.list
  };
};

export default connect(
  mapStateToProps
)(Squat);