import React, { Component, PropTypes } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// import './style.scss';

export default class ProgressTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent:  0
    }
  }

  componentDidMount(){
    setTimeout(this.update, 1000)
  }

  update = () => {
    this.setState({
      percent: this.props.percent
    })
  }

  render() {
    console.log('progress template state', this.state);
    console.log('progress template props', this.props);
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Progress
          percent={this.state.percent}
          status={this.props.status}
          theme={this.props.theme}
          type={this.props.type}
          width={this.props.width}
          strokeWidth={this.props.strokeWidth}
          style={{ margin: '0 0 0 10px' }}
        />
      </div>
    )
  }
}
