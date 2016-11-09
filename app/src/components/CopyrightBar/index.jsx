import React, { Component } from 'react';

import './index.scss';

// Made with {"<3"} at {this.props.holder}
// Copyright © {this.props.holder} 2016

class CopyrightBar extends Component {
  render() {
    return (
      <div className="CopyrightBar">
        <div className="text-center">
          <p>
            {this.props.message}
          </p>
        </div>
      </div>
    );
  }
}

export default CopyrightBar;
