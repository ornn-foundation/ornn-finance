import React from "react";

export function useOutsideAlerter(ref: React.MutableRefObject<any>) {
  const [state, setState] = React.useState({
    outside: false,
    active: 0,
  });
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState((e) => ({
          active: e.active + 1,
          outside: false,
        }));
      } else {
        setState((e) => ({
          active: e.active + 1,
          outside: true,
        }));
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return state;
}
