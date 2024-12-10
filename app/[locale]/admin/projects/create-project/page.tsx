import CreateProjectForm from "../components/create-project-form";

export default function CreateProject() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CreateProjectForm />
    </div>
  )
}
