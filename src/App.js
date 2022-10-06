import React from "react";
// import Prop from "./Prop-types";
import Setup from "./memo-useCallback-useMemo";
// import Booklist from "./components/Booklist";

const App = () => {
  return (
    <div className='container'>
      <Setup />

      {/* <h1>Hi my name is Fahm and this is like my 60th component</h1>
      <Code />
      <Booklist /> */}
    </div>
  );
};

// const Code = () => <p>Hello World!!!</p>;

// JSX
// const App = () => {
//     return (
//         React.createElement('div',
//         {},
//         React.createElement('h1', {}, 'Hi my name is Fahm and this is like my 60th component')
//         )
//     );
// }

export default App;
