import React, { PureComponent } from 'react';
import './SectionTitle.css';

class SectionTitle extends PureComponent {
  render() {
    const { className, children } = this.props;
    return <p className={`${className} section-title`}>{children}</p>;
  }
}

export default SectionTitle;
