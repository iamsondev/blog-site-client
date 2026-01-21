import Link from "next/link";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8 font-bold">
        {/* Development - Blue Color */}
        <Link className="hover:underline text-teal-500" href="/development">
          Development
        </Link>

        <Link className="hover:underline text-amber-500" href="/testing">
          Testing
        </Link>

        <Link className="hover:underline text-emerald-500" href="/marketing">
          Marketing
        </Link>

        <Link
          className="hover:underline text-purple-500"
          href="/marketing/settings"
        >
          Settings
        </Link>

        <Link className="hover:underline text-orange-500" href="/sales">
          Sales
        </Link>
      </nav>
      <div className="flex">
        {marketingSlot}, {salesSlot},
      </div>

      <div>
        <h1 className="text-2xl">{children}</h1>
      </div>
    </div>
  );
}
