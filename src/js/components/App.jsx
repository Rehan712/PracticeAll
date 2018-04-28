import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';

class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData();
  }
  renderData(item) {
    return Object.values(item).map(value => {
      return <div>{value}</div>;
    });
  }
  renderStudentData() {
    const { data } = this.props;
    console.log('this is data from renderStudentData', this.props.data);
    if (this.props.data.data.length) {
      return data.data.map(item => {
        return Object.values(item.studentHR.studentDetails).map(item => {
          return <div>{item}</div>;
        });
      });
    } else {
      return '';
    }
  }
  render() {
    console.log('this is the data', this.props.data);
    return (
      <div className="app">
        <div className="form">
          <div className="header">Header</div>
          <div className="panel">
            <ExpansionPanel>
              <ExpansionPanelSummary>
                <div className="studentDetails">{this.renderStudentData()}</div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                This is a test for the material ui
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps, { getData: actions.getUserData })(App);

App.propTypes = {
  //getAction: PropTypes.func.isRequired
};
