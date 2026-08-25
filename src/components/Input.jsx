
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-[10px] border border-gray-200 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-400"
      />
    </div>
  )
}

export default Input
