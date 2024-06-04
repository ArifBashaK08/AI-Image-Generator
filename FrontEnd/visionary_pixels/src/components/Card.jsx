import { download } from "../assets"
import { downloadImg } from "../utils"

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img src="https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg" alt="AI-Art" className="w-full h-auto rounded-xl object-cover" />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt font-semibold">{"AI-Art"}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 font-bold text-white flex justify-center items-center text-xs">{"A"}</div>
            <p className="text-white text-sm">{"Arif"}</p>
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