interface Props {
  transport: string;
}

export function TransportBadge({ transport }: Props) {
  const isAirplane = transport.includes("OZ") || transport.includes("✈");
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
      ${isAirplane ? "bg-blue-50 text-blue-700" : "bg-orange-50 text-orange-700"}`}>
      {transport}
    </div>
  );
}
