import React from 'react';
import './editor.css'

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input, onChange } = this.props;
    return (
      <section className="editor">
        <div className="title">
          <h2>Editor</h2>
        </div>
        <div className="editor-box">
          <textarea id="editor" value={input} onChange={onChange} />
        </div>
      </section>
    );
  }
}

export default Editor;