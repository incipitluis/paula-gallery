import Link from "next/link";

export function Options() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-4">
                <Link href="/admin/projects/create-project" className="bg-blue-500 text-white text-2xl px-4 py-2 rounded hover:bg-blue-600 transition">
                    Create New Project
                </Link>
                <Link href="/admin/projects/edit-project" className="bg-green-500 text-white text-2xl px-4 py-2 rounded hover:bg-green-600 transition">
                    Edit Existing Project
                </Link>
            </div>
        </div>
    );
}
