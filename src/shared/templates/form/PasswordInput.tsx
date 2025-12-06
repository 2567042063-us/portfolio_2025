import {
  ClassAttributes,
  forwardRef,
  InputHTMLAttributes,
  JSX,
  useState,
} from "react";

function PasswordInput(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <div className="relative">
      <input
        {...props}
        type={isPasswordVisible ? "text" : "password"}
        ref={ref}
      />
      <label
        className="absolute inset-y-0 right-0 flex cursor-pointer select-none items-center px-4 text-xs font-medium uppercase text-gray-600 dark:text-stone-400"
        onClick={togglePasswordVisibility}
        htmlFor="password"
      >
        {isPasswordVisible ? <span>Hide</span> : <span>Show</span>}
      </label>
    </div>
  );
}

export default forwardRef(PasswordInput);