export default function ImageNav() {
  function handlePrev() {}
  function handleNext() {}
  const indexes = [
    "r3",
    "b3",
    "r4",
    "b4",
    "r5",
    "b5",
    "r6",
    "b6",
    "r7",
    "b7",
    "r8",
    "b8",
    "r9",
    "b9",
  ];

  return (
    <div className="mt-3 flex justify-evenly w-32">
      <button
        onClick={handlePrev}
        className="w-9 h-9 rounded-full bg-slate-300 hover:bg-white hover:text-black text-white font-bold"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="w-9 h-9 rounded-full bg-slate-300 hover:bg-white hover:text-black text-white font-bold"
      >
        &#8594;
      </button>
    </div>
  );
}
