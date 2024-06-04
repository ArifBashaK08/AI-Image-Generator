

const FormField = ({ lableName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurprise }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900" >
          {lableName}
        </label>
        {isSurpriseMe && (
          <button type="button"
            onClick={handleSurprise}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-md text-black"
          >Surprise me</button>
        )}
      </div>
      <input type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  )
}
export default FormField