import * as React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    onSuccess: PropTypes.func,
  }

  constructor(props) {
    super(props);
    const { from } = props;
    this.state = {
      currentCount: from,
      status: 'on',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  pause = () => {
    this.setState({ status: 'paused' });
    clearInterval(this.intervalId);
  }

  unpause = () => {
    this.setState({ status: 'on' });
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  reset = () => {
    this.setState({ status: 'on' });
    this.setState({
      currentCount: this.props.from,
    });
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  handleClick = () => {
    if (this.state.status === 'on') {
      this.pause();
    } else if (this.state.status === 'paused') {
      this.unpause();
    } else {
      this.reset();
    }
  };

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });

    if (this.state.currentCount === this.props.to) {
      this.setState({ status: 'off' });
      clearInterval(this.intervalId);

      if (this.props.onSuccess) {
        this.props.onSuccess();
      }
    }
  };

  timeFormat = () => {
    const { currentCount } = this.state;
    const date = new Date(currentCount * 1000);
    const format = { minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString('pl-PL', format);
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{
          fontSize: '3em',
          margin: '10px',
        }}
      >
        {this.timeFormat()}
      </button>
    );
  }
}

export default Counter;
