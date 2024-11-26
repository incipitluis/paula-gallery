"use client"

import { useTranslations } from "next-intl"
import { NavContent } from "./nav-content"

const SideBar = () => {
  const t = useTranslations()

  const menuItems = [
    {
      name: t("create-project"),
      href: "/admin/create-project",
    },
    {
      name: t("upload-products"),
      href: "/admin/upload-product",
    },
    {
      name: t("personalize-website"),
      href: "/admin/personalize-website",
    },
    {
      name: t("analytics"),
      href: "/admin/analytics",
    },
  ]

  return <NavContent menuItems={menuItems} />

}

export default SideBar
