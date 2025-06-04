// export default function ToDo({ task, isDone }) {
//   // props.task = "JS";

//   return <li>Task: {task}</li>;
// }

// export default function ToDO({ task, isDone }) {
//   if (isDone) {
//     return <li>{task}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// export default function ToDO({ task, isDone, time = 0 }) {
//   if (isDone) {
//     return (
//       <li>
//         {task} Duration : {time}
//       </li>
//     );
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// conditional rendering : 3 ternary
// condition ? true : false

// export default function ToDO({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>Done: {task}</li>
//   ) : (
//     <li>
//       Not Done: {task}
//       time : {time}
//     </li>
//   );
// }

// conditional rendering : 4 &&
// display onlye done
// export default function ToDO({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done Task: {task} time {time}
//       </li>
//     )
//   );
// }

// conditional rendering : 5 &&
// export default function ToDO({ task, isDone, time = 0 }) {
//   return (
//     // if done false, then proceed
//     isDone || (
//       <li>
//         Not Done: {task} time {time}
//       </li>
//     )
//   );
// }

// export default function ToDO({ task, isDone, time = 0 }) {

//   if (isDone === true) {
//     // dont show if done
//     return null;
//   } else {
//     return <li>Pending : {task}</li>;
//   }
// }

// conditional rendering: 6 use variable
// export default function ToDO({ task, isDone, time }) {
//   const displayTime = time ? time : 100;

//   let listItem;

//   if (isDone === true) {
//     listItem = (
//       <li>
//         Done: {task} time: {displayTime}
//       </li>
//     );
//   } else {
//     listItem = <li>Pending: {task}</li>;
//   }
//   return listItem;
// }
