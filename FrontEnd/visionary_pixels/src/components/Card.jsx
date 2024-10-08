import { download } from "../assets"
import { downloadImg } from "../utils"

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img src={photo} alt="AI-Art" className="w-full h-auto rounded-xl object-cover" />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#10131f] to-transparent p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt font-semibold">{prompt.split(0,100)}...</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 font-bold text-white flex justify-center items-center text-xs">{name.charAt(0)}</div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button type="button"
            onClick={() => downloadImg(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Card