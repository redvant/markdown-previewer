import React from 'react';
import Editor from './components/editor/editor.component';
import Preview from './components/preview/preview.component';
import { marked } from 'marked';
import { sanitize } from 'dompurify';
import './App.css';
import newFile from './assets/new_file_w.png'

const DEFAULT_TEXT = localStorage.getItem('edit-text') || `# Welcome! 
This is a markdown previewer, which means that if you write some markdown in the **Editor** it will get displayed in the **Preview** as html.

The next text are some basic examples of markdown syntax:
***
# Heading

## Subheading

This is a link: [Link to Github](https://www.github.com).

This is an inline code: \`const num = 5;\`.

This is a code block:
\`\`\`
render() {
  const {input, onChange} = this.props;
  return (
    <div>
      <textarea id="editor" value={input} onChange={onChange}/>
    </div>
  );
}
\`\`\`

This is a list:
- item
- item
- item

This is a blockqoute:
> Here is my quote
> Thanks!

This is an image:
![Image](https://i.imgur.com/IVGeGuJ.jpeg)

And finally here is some bold text: **BOLD**
***
You can check a more complete guide on markdown syntax [here](https://www.markdownguide.org/basic-syntax/).

**Now delete the default text and start writing some markdown!**
`;

marked.setOptions({
  breaks: true,
  sanitizer: sanitize
});

const renderer = {
  link(href, title, text) {
    return `<a href=${href} target="_blank">${text}</a>`;
  }
};

marked.use({ renderer });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: DEFAULT_TEXT
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
    localStorage.setItem('edit-text', event.target.value)
  }

  handleClear() {
    this.setState({
      markdown: ''
    });
    localStorage.clear();
  }

  render() {
    const { markdown } = this.state;
    const { handleChange, handleClear } = this;
    return (
      <div className="wrapper">
        <header>
          <h1>Markdown Previewer</h1>
          <button onClick={handleClear}><img src={newFile} alt="new file"></img></button>
        </header>
          <hr />
        <main className="content">
          <Editor input={markdown} onChange={handleChange} />
          <Preview markdown={markdown} />
        </main>
        <footer>
          <hr />
          <p> Edgar Roman Cervantes 2022 </p>
        </footer>
      </div>
    );
  }
}

export default App;
