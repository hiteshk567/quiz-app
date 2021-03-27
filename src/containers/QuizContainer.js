import { connect } from "react-redux";

import SelectedCategory from "../components/pages/SelectedCategory";
import { getQuiz, updateScore } from "../actions";

const mapStateToProps = (state) => ({
  quizInfo: state.quiz,
  isLoading: state.loading,
  completedList: state.completedList,
});

const mapDispatchToProps = (dispatch) => ({
  getQuiz: (id) => dispatch(getQuiz(id)),
  updateScore: (status) => dispatch(updateScore(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCategory);
