import { useState } from "react";

const SmallFunction = () => {
  const [v, setV] = useState({
    hi: "kishore",
  });
  const on = () => {
    setV((prev) => {
      const newV = { ...prev, k: "Sai" };
      setV(newV);
      console.log(v);
    });
  };

  return !v.name ? (
    <div>
      <h1>
        {v.hi}
        <button onClick={on}>add</button>
      </h1>
    </div>
  ) : (
    <h1>{v.k}</h1>
  );
};
export { SmallFunction };

export default function useStateCounter() {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <h2>regular Counter</h2>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((pre) => pre - 1);
        }}
      >
        decrease
      </button>
      <button onClick={reset}>reset</button>
      <button
        onClick={() => {
          setValue((pre) => pre + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}
