import React, { useState } from "react";
import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true, // Enable line breaks
});

function App() {
  const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '~~~' && lastLine == '~~~') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [markdownInput, setMarkdownInput] = useState(defaultMarkdown);

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <h1 className="text-3xl text-center mt-3 py-5 font-bold text-gray-800">
        Markdown Previewer
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-7 py-5">
        {/* Editor Section */}
        <div className="flex flex-col bg-white rounded-lg border border-gray-300 shadow-md w-full lg:w-[35%] h-[550px] md:h-[570px]">
          <h2 className="text-lg font-semibold bg-emerald-600 text-white text-center py-3 rounded-t-lg">
            Editor
          </h2>
          <textarea
            id="editor"
            className="flex-grow w-full p-4 text-base bg-gray-100 resize-none font-mono"
            value={markdownInput}
            onChange={(e) => setMarkdownInput(e.target.value)}
          ></textarea>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col bg-white rounded-lg border border-gray-300 shadow-md w-full lg:w-[55%]  md:h-[570px]">
          <h2 className="text-lg font-semibold bg-emerald-600 text-white text-center py-3 rounded-t-lg">
            Preview
          </h2>
          <div
            id="preview"
            className="markdown flex-grow w-full p-4 text-base bg-gray-100 overflow-y-auto font-mono"
            dangerouslySetInnerHTML={{ __html: marked(markdownInput) }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center font-bold text-md pb-4 text-gray-500">
        <p>
          Created by [
          <a
            href="https://www.linkedin.com/in/golamrabby-/"
            target="_blank"
            className="text-red-500"
          >
            Golam Rabby
          </a>
          ]
        </p>
      </footer>
    </div>
  );
}

export default App;
