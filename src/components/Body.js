import React from 'react';

/* Functional Component: Pattern# 1 */
const Body = props => (
    <div className="section">
      <p>{props.greetTxt}</p>
      <p>{props.greetTxt2}</p>
      <p>{props.myFunc(5,6)}</p>
    </div>
);

/* Functional Component: Pattern# 2 */
// const Body = () => {
//   return (
//     <div className="section">
//       Hello, React...
//     </div>
//   );
// }

/* Functional Component: Pattern# 3 */
// function Body() {
//   return (
//     <div className="section">
//       Hello, React...
//     </div>
//   );
// }

export const Body2 = () => (
  <div>
    <p>This is exported from `Body2` component</p>
  </div>
);
export const Body3 = () => (
  <div>
    <p>This is exported from `Body3` component</p>
  </div>
);

export default Body;
