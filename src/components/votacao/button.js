export default function Button({ text, onClick, className, status = true }) {
    return (
      <button
        className={`${
          status ? "bg-[#9D0000] cursor-pointer" : "bg-[#666666] cursor-not-allowed"
        } text-white rounded-full md:rounded-[14px] text-lg md:w-60 md:h-14 px-4 py-2 shadow-gray-400 shadow-md transition-all delay-100 hover:opacity-90 ${className}`}
        onClick={status ? onClick : undefined}
        disabled={!status}
      >
        {text}
      </button>
    );
}