import SpecUserOverview from "@/app/components/dashboard/specUserOverview";

export default async function Users({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="h-screen w-full flex items-center justify-evenly flex-col text-3xl font-semibold">
      <SpecUserOverview id={Number(params.userId)} />
    </div>
  );
}
