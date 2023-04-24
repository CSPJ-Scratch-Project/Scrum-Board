import * as React from 'react';

export const Project = props => {
  const [ toggleTitle, setToggleTitle ] = useState(true);
  console.log('props.id: ', props.id);
  return (
    <article>
    {toggleTitle 
      ? (
      <p onDoubleClick={() => {setToggleTitle(false)}} >{taskTitle}</p> ) 
      : (
      <input
        type="text"
        value={taskTitle}
        onChange={(event) => {
          setTaskTitle(event.target.value)
        }}
        onBlur={() => {
          setToggleTitle(true)
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            setToggleTitle(true)
            event.preventDefault()
            event.stopPropagation()
          }
        }}
      />
    )}
    </article>
  );
  // return (
  //   <div
  //     id={props.id}
  //     style={{
  //       width: '400px',
  //       height: '100px',
  //       border: '2px solid black',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}
  //   >
  //     Project {props.id}
  //   </div>
  // );
};
