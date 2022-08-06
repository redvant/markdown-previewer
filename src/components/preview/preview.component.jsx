import React from 'react';
import { marked } from 'marked';
import './preview.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup(markdown) {
    return {
      __html: marked.parse(markdown)
    };
  }

  render() {
    const { markdown } = this.props;
    const { createMarkup } = this;
    return (
      <section className="preview">
        <div className="title">
          <h2>Preview</h2>
        </div>
        <div className="preview-box">
          <div dangerouslySetInnerHTML={createMarkup(markdown)} id="preview"/>
        </div>
      </section>
    );
  }
}

export default Preview;