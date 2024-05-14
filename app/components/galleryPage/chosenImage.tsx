import clsx from "clsx";

export default function ChosenImage({ img }: { img: string }) {
  const text =
    (img[0] == "r" ? "Czerwony" : "Niebieski") + " " + (Number(img[1]) - 2);

  return (
    <div
      className={clsx(
        "bg-slate-300 h-56 w-60 rounded-3xl mt-3 flex flex-col items-center justify-center text-2xl font-bold text-white",
        { "bg-blue-300": img == "b3" },
        { "bg-blue-400": img == "b4" },
        { "bg-blue-500": img == "b5" },
        { "bg-blue-600": img == "b6" },
        { "bg-blue-700": img == "b7" },
        { "bg-blue-800": img == "b8" },
        { "bg-blue-900": img == "b9" },
        { "bg-red-300": img == "r3" },
        { "bg-red-400": img == "r4" },
        { "bg-red-500": img == "r5" },
        { "bg-red-600": img == "r6" },
        { "bg-red-700": img == "r7" },
        { "bg-red-800": img == "r8" },
        { "bg-red-900": img == "r9" }
      )}
    >
      {text}
    </div>
  );
}
