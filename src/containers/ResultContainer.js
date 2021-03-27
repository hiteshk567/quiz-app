import { connect } from "react-redux";
import {} from "../actions";
import Result from "../components/pages/Result";

const mapStateToProps = (state) => ({
  userInfo: state.user,
});

export default connect(mapStateToProps)(Result);
