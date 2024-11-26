import SideBar from "./components/sidebar"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden w-full">
      <SideBar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
