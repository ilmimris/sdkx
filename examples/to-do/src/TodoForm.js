import React, { useRef, useState } from "react";
import { AppAction } from "./App.Data";

export const TodoForm = React.memo(() => {
  const [value, setValue] = useState("");
  const appAction = useRef(null);

  const handleSubmit = React.useCallback(e => {
    e.preventDefault();
    if (!value)
      return;
    appAction.current.addTodo(value);
    setValue("");
  });


  return (
    <>
      <AppAction ref={appAction} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)} />
      </form>
    </>
  );
})
