import clsx from "clsx";

export default function ChosenImage({ img }: { img: string }) {
  if (
    (img[0] != "r" && img[0] != "b") ||
    Number(img[1]) < 3 ||
    Number(img[1]) > 9
  ) {
    return (
      <div className="h-56 w-60 rounded-3xl mt-3 flex flex-col items-center justify-center text-2xl font-bold text-white border border-white bg-slate-500">
        Invalid image
      </div>
    );
  }

  const text =
    (img[0] == "r" ? "Czerwony" : "Niebieski") + " " + (Number(img[1]) - 2);

  return (
    <div
      className={clsx(
        "h-56 w-60 rounded-3xl mt-3 flex flex-col items-center justify-center text-2xl font-bold text-white",
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
