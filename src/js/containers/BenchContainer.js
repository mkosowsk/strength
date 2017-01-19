import Bench from '../components/Bench';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    benchExercises: state.benchExercises.list
  };
};

export default connect(
  mapStateToProps
)(Bench);