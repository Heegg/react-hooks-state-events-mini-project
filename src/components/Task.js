import React from "react";

function Task({ text, category, handleDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(text)}>X</button>
    </div>
  );
}

export default Task;


// <Start>==================================================</>

// import React from "react";

// function Task() {
//   return (
//     <div className="task">
//       <div className="label">CATEGORY HERE</div>
//       <div className="text">TEXT HERE</div>
//       <button className="delete">X</button>
//     </div>
//   );
// }

// export default Task;
