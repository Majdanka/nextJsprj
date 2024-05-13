"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <div className="w-[98%] pt-2">
        <input
          className="block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          defaultValue={searchParams.get("search")?.toString()}
        />
      </div>
    </>
  );
}
