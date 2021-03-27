import { connect } from "react-redux";
import { setQuestionCompleted } from "../actions";
import QuestionOptions from "../components/UIElements/QuestionOptions";

const mapStateToProps = (state) => ({
  completedList: state.completedList,
});

const mapDispatchToProps = (dispatch) => ({
  setQuestionCompleted: (index, result) =>
    dispatch(setQuestionCompleted(index, result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOptions);
