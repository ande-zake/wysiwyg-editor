import "./Link.css";

import { useCallback, useContext, useEffect, useRef } from "react";

import { EditorDispatchContext } from "./Editor.react";

export default function Link({ element, attributes, children }) {
  const ref = useRef(null);
  const dispatch = useContext(EditorDispatchContext);
  const toggleEditMode = useCallback(
    (event) => {
      dispatch({ type: "toggle_selection_menu", selectionRef: ref.current });
    },
    [dispatch]
  );

  useEffect(() => {
    console.log("ref in useEffect:", ref);
  }, []);

  return (
    <a
      href={element.url}
      onMouseDown={toggleEditMode}
      ref={ref}
      style={{ position: "relative" }}
      {...attributes}
    >
      {children}
      {/* Write a point about why se can't have custom selection menu like below because of Slate's GH issue */}
      {/* <span
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          userSelect: "none",
        }}
        content-editable={"false"}
      >
        Link:
        <button></button>
        <input type="text" value="something" onChange={() => {}} />
      </span> */}
    </a>
  );
}