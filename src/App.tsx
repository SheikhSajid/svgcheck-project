import './App.css';
import folderSelected from './assets/images/folder-selected.svg';

/**
 * According to SVGR plugin documentation, the console.log on line 11
 * should print the path to the image: 
 *   "/assets/images/folder-selected.svg".
 * However, it prints (truncated):
 *   "data:image/svg+xml;base64,PHN2ZyBpZD0iaWN43OD...ISIvPgo8L3N2Zz4="
 */
console.log(folderSelected);

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
