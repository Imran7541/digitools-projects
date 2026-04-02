import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isBuyNow, setIsBuyNow] = useState(false);
  const handleBuyNow = () => {
    setIsBuyNow(true);
    setCarts([...carts, model]);
    toast.success("handle added to card!");
  };
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all py-10 flex flex-col h-full">

        <div className="px-6">

          <div className="w-16 h-16 rounded-full bg-white shadow-lg border-2 border-white flex items-center justify-center p-1.5 overflow-hidden">
            <img className="w-[60%] h-[60%] object-contain"
            src={model.icon}
          />
          </div>
        </div>
        <div className="p-4 space-y-2 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold">{model.name} </h2>
          <h2>{model.description} </h2>

          <h2 className="text-xl font-bold  ">${model.price}/mo </h2>

          <div className="mt-auto pt-4">
            <div className="w-full ">
              <div className="mb-6">
                <div>
                  <span className="text-tik">✓</span>
                  {model.period}
                </div>
                <div>
                  <span className="text-tik">✓</span>
                  {model.tag}
                </div>
                <div>
                  <span className="text-tik">✓</span>
                  {model.features}
                </div>
              </div>
              <button
                onClick={handleBuyNow}
                className="bg-purple-700 text-white w-full py-3 rounded-full text-center"
              >
                {isBuyNow ? "Buy" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
