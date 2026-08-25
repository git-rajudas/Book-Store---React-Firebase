import { ChevronDown } from "lucide-react"

function Select({
    label,
    options,
    value, 
    onChange
  }
) {
    return (
        <div>
      <label className="mb-2 block text-xs font-medium">
        {label}
      </label>

      <div className="relative ">
        <select value={value} onChange={onChange} className="h-11 w-full appearance-none rounded-[10px] border border-gray-200 bg-white px-3 text-sm outline-none focus:border-blue-400 ">
          {options.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-3 text-gray-400"
        />
      </div>
    </div>
    )
}

export default Select
