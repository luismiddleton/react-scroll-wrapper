import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Scroll extends Component {

  static displayName = 'ScrollWrapper'

  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      clientHeight: window.innerHeight,
      clientWidth: window.innerWidth,
      bodyHeight: 0,
      scrollPercentage: () => {
        return (this.state.scrollY / this.state.bodyHeight) * 100;
      }
    };
  }

  componentDidMount() {
    this.resizeEventListener();
    this.scrollEventListener();
  }

  componentWillUnmount() {
    this.removeEvents(["resize", "scroll"]);
  }

  resizeEventListener = () => {
    window.addEventListener("resize", () => {
      this.setState({
        clientHeight: window.innerHeight,
        clientWidth: window.innerWidth
      });
    });
  };

  scrollEventListener = () => {
    window.addEventListener("scroll", () => {
      this.setState({
        scrollY: window.scrollY,
        bodyHeight:
          document.documentElement.scrollHeight - this.state.clientHeight
      });
    });
  };

  removeEvents = args => {
    args.forEach(event => {
      window.removeEventListener(event);
    });
  };

  render() {
    const { clientWidth, scrollPercentage } = this.state;
    const { children, barColor, barSize, customStyles } = this.props;

    const defaultStyles = {
      position: "fixed",
      height: !barSize ? "5px" : barSize,
      backgroundColor: !barColor ? "#e74c3c" : barColor
    };

    const renderBarWidth = {
      width: (clientWidth / 100) * scrollPercentage()
    };

    return (
      <Fragment>
        <section
          style={
            !customStyles
              ? { ...renderBarWidth, ...defaultStyles }
              : { ...renderBarWidth, ...customStyles }
          }
        />
        {children}
      </Fragment>
    );
  }
}

Scroll.propTypes = {
  barColor: PropTypes.string,
  barSize: PropTypes.string,
  customStyles: PropTypes.object
};
