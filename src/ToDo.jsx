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

export default function ToDO({ task, isDone, time = 0 }) {
  if (isDone) {
    return (
      <li>
        {task} Duration : {time}
      </li>
    );
  } else {
    return <li>Pending: {task}</li>;
  }
}
