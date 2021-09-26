import React from "react";

export function useOutsideAlerter(ref: React.MutableRefObject<any>) {
  const [outside, setOutside] = React.useState(false);
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutside(false);
      } else {
        setOutside(true);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return { outside };
}
