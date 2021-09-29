import React from 'react';

const withData = (Component, url) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState(() => ({
            data: data.slice(0, 5),
          }));
        });
    }

    render() {
      return <Component data={this.state.data} {...this.props} />;
    }
  }

  return WithData;
};

export default withData;
