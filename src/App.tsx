import { Widget } from "@uploadcare/react-widget";

import "./App.css";

import SingleFileUploader from "./components/SingleFileUploader";
import MultipleFileUploader from "./components/MultipleFileUploader";

function App() {
  return (
    <>
      <h1>React File Upload</h1>

      <h2>Single File Upload</h2>
      <SingleFileUploader />

      <h2>Multiple File Upload</h2>
      <MultipleFileUploader />

      <h2>Uploadcare React Widget</h2>
      <Widget publicKey={import.meta.env.VITE_UPLOADCARE_API_KEY} multiple />

      <p className="read-the-docs">This app is built with Vite and React.</p>
    </>
  );
}

export default App;
