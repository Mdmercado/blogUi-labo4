import { TextInput, DatePicker } from "@tremor/react";

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  errorMessage,
  register = () => {},
}) => {
  return (
    <div className="mb-2">
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}>
          {label}
        </label>
      )}
      {type === "date" ? (
        <div>
          <input
            type="date"
            name={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={placeholder}
            {...register(name, { required: "Este campo es requerido" })}
          />
          <p>
            {error && (
              <span className="text-red-500 text-xs italic">
                {errorMessage}
              </span>
            )}
          </p>
        </div>
      ) : (
        <TextInput
          type={type}
          name={name}
          // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
          error={error}
          errorMessage={errorMessage}
          {...register(name, { required: "Este campo es requerido" })}
        />
      )}
    </div>
  );
};

export default InputField;
