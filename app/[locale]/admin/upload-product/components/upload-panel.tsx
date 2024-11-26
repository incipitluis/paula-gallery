"use client"

import UploadProductForm from "./upload-product-form"

export default function UploadPanel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <UploadProductForm />
    </div>
  )
}
