import { connect } from "react-redux";
import Modal from "../components/UIElements/Modal";

const mapStateToProps = (state) => ({
  answeredList: state.completedList,
});

export default connect(mapStateToProps, null)(Modal);
