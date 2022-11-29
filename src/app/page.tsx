import ModernTreasury from "modern-treasury";
import { modernTreasury } from "@/utils/modern-treasury";

export default async function Page() {
  const { items }: { items: ModernTreasury.Connection[] } =
    await modernTreasury.connections.list();

  return (
    <div className="p-24">
      {items?.map((connection, index) => (
        <div className="" key={index}>
          {connection.vendor_name}
        </div>
      ))}
    </div>
  );
}
