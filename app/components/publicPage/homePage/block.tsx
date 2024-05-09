export default function Block({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-[40vh] flex justify-evenly">{children}</div>;
}
