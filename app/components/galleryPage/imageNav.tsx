import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ImageNav() {
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

  const current = useSearchParams().get("image");
  const { replace } = useRouter();
  const pathname = usePathname();

  function handlePrev() {
    if (current) {
      const index = indexes.indexOf(current.toString());
      if (index > 0) {
        replace(`${pathname}?image=${indexes[index - 1]}`);
      }
    }
  }
  function handleNext() {
    if (current) {
      const index = indexes.indexOf(current.toString());
      if (index < indexes.length - 1) {
        replace(`${pathname}?image=${indexes[index + 1]}`);
      }
    }
  }

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
