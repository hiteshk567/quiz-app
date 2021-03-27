import { connect } from "react-redux";

import App from "../App";
import { getCategories } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(getCategories()),
});

export default connect(null, mapDispatchToProps)(App);
