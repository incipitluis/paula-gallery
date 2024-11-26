"use client"

import { useState } from "react"
import { SearchProject } from "./search-project"

interface SearchToolProps {
  onSearch: (projectId: string) => void
}

export function SearchTool({ onSearch }: SearchToolProps) {
  return (
    <div className="flex flex-row gap-6">
      <SearchProject onProjectSelect={onSearch} />
    </div>
  )
}
