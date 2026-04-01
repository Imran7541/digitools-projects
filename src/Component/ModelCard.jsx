import { useState } from "react";
import { toast } from "react-toastify";



const ModelCard = ({model, carts,setCarts}) => {
    const [isBuyNow, setIsBuyNow]= useState(false)
    const handleBuyNow= ()=>{
        setIsBuyNow(true)
        setCarts([...carts,model]);
        toast.success("handle added to card!")
    }
    return (
                <div className='shadow-lg rounded-lg 
           overflow-hidden border-zinc-500'>
                <div className='flex justify-right-safe items-center h-36 pl-4'>
                    <img className='h-10 w-10 object-contain shadow-lg rounded-b-selector' src={model.icon} />
                    
                </div>
              <div className='p-4 space-y-3'>
                <h2 className='text-2xl font-bold'>{model.name} </h2>
                <h2>{model.description} </h2>
              
              
                <h2 className='text-xl font-bold  '>${model.price}/month </h2>
              
              
              <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6 ">
                <div className='w-full'> 
            <h2><span className='text-tik'>✓</span>{model.period} </h2>
            <h2><span className='text-tik'>✓</span>{model.tag}</h2>
            <h2><span className='text-tik'>✓</span>{model.features}</h2>
            <button onClick={handleBuyNow} className='bg-purple-700 text-white w-full py-3 rounded-full text-center'>{isBuyNow ? "Buy" : "Buy Now"} </button>
            </div>
          </div>
        </div>
            </div>
    );
};

export default ModelCard;