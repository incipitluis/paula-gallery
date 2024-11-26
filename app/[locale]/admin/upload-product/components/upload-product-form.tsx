"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createProduct } from "@/app/actions/actions"
import { SearchTool } from "./search-tool"
import { useState } from "react"

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  date: z.string(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string(),
  estimated_cost: z.string(),
  project_id: z.string(),
})

export default function UploadProductForm() {
  const [projectId, setProjectId] = useState("")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: new Date().toISOString().split('T')[0],
      description: "",
      price: "",
      estimated_cost: "",
      project_id: projectId,
    },
  })

  const handleSubmit = async () => {
    const values = form.getValues();
    await createProduct({
      ...values,
      date: new Date(values.date),
      project_id: projectId,
      price: values.price,
      estimated_cost: values.estimated_cost,
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Upload New Product
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill in the details below to create a new product
          </p>
        </div>

        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Product Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter product name" 
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
                    This is your product's display name.
                  </FormDescription>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />
            <div>
                <h2 className="text-gray-700 dark:text-gray-300">Project Details</h2>
                <SearchTool onSearch={setProjectId} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        step="0.01"
                        placeholder="0.00" 
                        {...field}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estimated_cost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Estimated Cost
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        step="0.01"
                        placeholder="0.00" 
                        {...field}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="date" 
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter product description"
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200 min-h-[120px]"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-gray-500 dark:text-gray-400">
                    Provide a detailed description of your product.
                  </FormDescription>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-6">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Upload Product</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
