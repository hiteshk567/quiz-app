import { connect } from "react-redux";

import {
  setUser,
  updateScore,
  setCompletedToDefault,
  setUserInfoToDefault,
} from "../actions";
import CategorySelection from "../components/pages/CategorySelection";

const mapStateToProps = (state) => ({
  categoryList: state.category,
  isLoading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateScore: (status) => dispatch(updateScore(status)),
  setUser: (name) => dispatch(setUser(name)),
  setToDefault: () => dispatch(setCompletedToDefault()),
  setUserinfoToDefault: () => dispatch(setUserInfoToDefault()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelection);
