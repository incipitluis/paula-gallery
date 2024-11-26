import UploadPanel from "./components/upload-panel"

export default function UploadProduct() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <UploadPanel />
    </div>
  )
}

/* This one needs to be able to search on client for the project and select it. Then you can upload the product to that project.
On select you get the name and the id, so you can then vinculate the product to the project. */
