"use client"

import { getProjectById } from "@/app/data/data";
import { SearchTool } from "../../../upload-product/components/search-tool";
import { useState } from "react";
import { SelectProject } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { updateProject } from "@/app/actions/actions";
export function EditProject() {
    const [projectId, setProjectId] = useState("");
    const [project, setProject] = useState<SelectProject | null>(null);
    const [editName, setEditName] = useState(false);
    const [editDate, setEditDate] = useState(false);
    const [editDescription, setEditDescription] = useState(false);

    const handleSearch = async (projectId: string) => {
        setProjectId(projectId);
        const project = await getProjectById(projectId);
        if (project) {
            setProject(project[0]);
        }
    }

    return <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <SearchTool onSearch={handleSearch} />
        {project && <div>
            <h1>{project.name}</h1>
            <Button onClick={() => setEditName(true)}>Update Name</Button>
            <p>{project.description}</p>
            <Button onClick={() => setEditDescription(true)}>Update Description</Button>
        </div>}
    </div>;
}
