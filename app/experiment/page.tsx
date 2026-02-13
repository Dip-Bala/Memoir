export default function Experiment(){
    return(
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col border border-dashed p-20 border-neutral-700 gap-4 items-center bg-neutral-900">
                <h1 className="text-9xl font-black font-inter text-indigo-600">Experiment</h1>
                <p className="text-5xl font-black font-inter text-amber-200">With Black, Pruple and Yellow</p>
                {/* <div className="bg-white my-6 flex items-center justify-center"> */}
                    <button className="py-3 px-6 border w-fit my-6 rounded-full cursor-pointer hover:shadow-[0_0_20px] shadow-indigo-300"
                    >Get Started</button>

                {/* </div> */}
            </div>
            <div className="flex flex-col border border-dashed p-20 border-neutral-700 gap-4 items-center bg-neutral-100">
                <h1 className="text-9xl font-black font-inter text-indigo-600">Experiment</h1>
                <p className="text-5xl font-black font-inter text-amber-300">With Black, Pruple and Yellow</p>
                {/* <div className="bg-white my-6 flex items-center justify-center"> */}
                    <button className="py-3 px-6 border w-fit my-6 rounded-full cursor-pointer hover:shadow-[0_0_20px] shadow-indigo-300 text-neutral-900"
                    >Get Started</button>

                {/* </div> */}
            </div>
        </div>
    )

}