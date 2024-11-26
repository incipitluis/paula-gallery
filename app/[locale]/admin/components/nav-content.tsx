import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { useToggle } from "react-use"
import { cn } from "@/lib/utils"

export const NavContent = ({
  menuItems,
}: {
  menuItems: { name: string; href: string; isExternal?: boolean }[]
}) => {
  const [open, toggleOpen] = useToggle(true)
  const pathname = usePathname()
  const t = useTranslations()

  return (
    <nav
      className={cn(
        "min-h-screen relative p-4 bg-purple-200/80 shadow-md border-r-2 border-black duration-300",
        !open && "w-8 p-0",
      )}
    >
      <Button
        className={cn(
          "absolute top-10 py-6 rounded-full -right-6 bg-black hover:bg-gray-600 duration-300",
          !open && "p-1 -right-3",
        )}
        onClick={toggleOpen}
      >
        <ChevronRight
          className={cn("w-4 rotate-0 duration-300", open && "rotate-180")}
        />
      </Button>
      {open && (
        <div>
          <div className="mb-6 px-4">
            <Link href="/admin">
              <span className="text-xl font-bold text-gray-700">
                {t("adminPanel")}
              </span>
            </Link>
          </div>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 w-full text-left px-4 py-2 rounded text-gray-700 ${
                    pathname.split('?')[0].endsWith(item.href.split('?')[0]) && "font-semibold"
                  } ${!pathname.split('?')[0].endsWith(item.href.split('?')[0]) && "hover:bg-gray-200"}`}
                >
                  {item.name}{" "}
                  {item.isExternal && <ExternalLink className="size-3" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
