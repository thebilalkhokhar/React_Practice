import React, { useDeferredValue, useEffect, useMemo } from "react";

const List = ({ input }) => {
  const deferredValue = useDeferredValue(input);
  const LIST_SIZE = 20000;

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(deferredValue);
    }
    return l;
  }, [deferredValue]);

  useEffect(() => {
    console.log(`Input: ${input}, Deferred Value: ${deferredValue}`);
  }, [input, deferredValue]);

  return (
    <div className="deferred-list">
      {list.map((item, index) => (
        <div key={index} className="deferred-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
