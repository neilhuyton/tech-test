import { connect } from "react-redux";
import { sortReports } from "../actions/reportActions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.sort === state.visibilitySort
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      return dispatch(sortReports(ownProps.sort));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
