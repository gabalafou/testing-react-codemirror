import { useState } from 'react';
import { CodeEditor } from './editor';

const App = ({
  onSubmit
}) => {

  const [editorContent, setEditorContent] = useState({ channels: [], dependencies: [], variables: {} });

  const onUpdateEditor = ({
    channels,
    dependencies,
    variables
  }) => {
    const code = { channels, dependencies, variables };

    if (!channels || channels.length === 0) {
      code.channels = [];
    }

    if (!dependencies || dependencies.length === 0) {
      code.dependencies = [];
    }

    if (!variables || Object.keys(variables).length === 0) {
      code.variables = {};
    }

    setEditorContent(code);
  };

  const handleSubmit = () => {
    const code = editorContent;
    onSubmit(code);
  };

  return (
    <div className="App">
      <CodeEditor
        code={JSON.stringify(editorContent)}
        onChangeEditor={onUpdateEditor}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
