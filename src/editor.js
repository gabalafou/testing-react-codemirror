import CodeMirror from "@uiw/react-codemirror";


export const CodeEditor = ({ code, onChangeEditor }) => {
  const handleOnChange = (string) => {
    try {
      onChangeEditor(JSON.parse(string));
    } catch (string) {
    }
  };

  return (
    <CodeMirror
        value={code}
        height="200px"
        onChange={string => handleOnChange(string)}
    />
  );
};
