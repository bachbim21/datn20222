import { useState, useRef, useEffect } from "react";
import { paserly } from "../../app.validate";
import "./Input.css";
export default function Input({
  id,
  type,
  dataCheck,
  isSubmit,
  deps,
  placeholder,
}) {
  const [error, setError] = useState(null);
  const e = useRef(null);
  const index = useRef(0);

  useEffect(handleCheck, [isSubmit]);

  // handle check error validate value
  function handleCheck() {
    const data_checks = e.current.dataset.check
      ? e.current.dataset.check
      : null;
    index.current++;
    if (data_checks != null && index.current > 1) {
      const checks = JSON.parse(data_checks);
      for (let check of checks) {
        var validate = paserly(check, e.current.value);

        if (!validate) {
          setError(check.message);
          break;
        }
      }
      if (validate && error != null) {
        setError(null);
      }
    }
    // check dependency from either input
    if (deps && deps.value.length > 0) {
      for (var i = 0; i < deps.value.length; i++) {
        if (deps.value[i] != e.current.value && index > 1) {
          setError(deps.message[i]);
          break;
        }
      }
    }
  }
  return (
    <div>
      <input
        ref={e}
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : null}
        className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md border-indigo-900 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
        data-check={dataCheck}
      />
      <span className="block h-4 text-red-700 text-base">{error}</span>
    </div>
  );
}
