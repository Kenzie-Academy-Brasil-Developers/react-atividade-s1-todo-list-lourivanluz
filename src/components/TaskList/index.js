import "./style.css";
export function TaskList({ taskList, removeItem }) {
  return (
    <ul>
      {taskList.map((item, index) => (
        <>
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)}>X</button>
          </li>
        </>
      ))}
    </ul>
  );
}
