"use client"

import { useState, useTransition } from "react"
import { Clock, SearchIcon, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { SelectProject } from "@/db/schema"
import { useDebouncedCallback } from "use-debounce"

type ProjectSearchResult = Pick<
  SelectProject,
  "id" | "name"
>

interface SearchProjectProps {
  onProjectSelect: (id: string) => void
}

export function SearchProject({ onProjectSelect }: SearchProjectProps) {
  const [searchInput, setSearchInput] = useState("")
  const [isSearchPopoverOpen, setIsSearchPopoverOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<ProjectSearchResult[]>(
    [],
  )
  const [isSelectedProject, setIsSelectedProject] = useState(false)
  const [isSearchingProject, startSearchingProject] = useTransition()

  const handleSearchInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInput(e.target.value)
    startSearchingProject(async () => {
      if (e.target.value.length > 0 && !isSearchPopoverOpen) {
        setIsSearchPopoverOpen(true)
      }
      if (e.target.value.length === 0 && isSearchPopoverOpen) {
        setIsSearchPopoverOpen(false)
        return
      }
      await getSearchResults(e.target.value)
    })
  }

  const getSearchResults = useDebouncedCallback(async (query: string) => {
    const response = await fetch(`/api/admin/search/project?query=${query}`)
    const data = await response.json()
    setSearchResults(data as ProjectSearchResult[])
  }, 500)

  const handleSelect = (id: string) => {
    setSearchInput(id)
    onProjectSelect(id)
    setIsSearchPopoverOpen(false)
    setIsSelectedProject(true)
  }

  return (
    <div className="relative">
      <div className="flex flex-row gap-2 items-center">
        <SearchIcon className="w-4 h-4" />
        <input
          className="min-w-64 px-4 py-2 border border-slate-700"
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search project..."
          autoFocus
        />
        {isSearchingProject ? (
          <Clock className="w-4 h-4" />
        ) : (
          <div className="size-4" />
        )}
        {searchInput.length > 0 && (
          <button
            className="absolute right-0"
            onClick={() => {
              setSearchInput("")
              setIsSelectedProject(false)
              setSearchResults([])
            }}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <div
        className={cn(
          "absolute top-10 left-0 w-64 border border-slate-700 flex flex-col bg-white z-20 max-h-72 overflow-y-auto rounded-b-md scrollbar-hide",
          isSearchPopoverOpen ? "block" : "hidden",
        )}
      >
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
            key={result.id}
            className="relative px-4 py-2 hover:bg-slate-700 hover:text-white cursor-pointer flex gap-2 justify-between items-center border-b border-b-slate-300"
            onClick={() => handleSelect(result.id)}
          >
            {result.name}
            <span
              className={cn(
                "absolute top-0 right-0 flex items-center font-bold py-0 text-slate-500 px-2 text-xs shadow-md opacity-80",
              )}
            >
              {result.name}
            </span>
            </div>
          ))
        ) : (
          <div className="px-4 py-2 text-gray-500 dark:text-gray-400">No results found</div>
        )}
      </div>
    </div>
  )
}
