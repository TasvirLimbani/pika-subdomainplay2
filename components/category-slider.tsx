"use client"

import { useEffect, useState } from "react"
import type { Category } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface CategorySliderProps {
  onCategoryChange: (category: string) => void
  selectedCategory: string
}

export function CategorySlider({ onCategoryChange, selectedCategory }: CategorySliderProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories")
        const data = await res.json()
        setCategories(data)
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="overflow-x-auto pb-4 mb-8">
      <div className="flex gap-3 min-w-min px-4">
        <Button
          onClick={() => onCategoryChange("all")}
          variant={selectedCategory === "all" ? "default" : "outline"}
          className={`whitespace-nowrap transition-all ${
            selectedCategory === "all"
              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              : "border-purple-500/50 text-purple-400 hover:text-white hover:border-purple-400"
          }`}
        >
          All Games
        </Button>

        {categories.map((category) => (
          <Button
            key={category._id}
            onClick={() => onCategoryChange(category.slug)}
            variant={selectedCategory === category.slug ? "default" : "outline"}
            className={`whitespace-nowrap capitalize transition-all ${
              selectedCategory === category.slug
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                : "border-purple-500/50 text-purple-400 hover:text-white hover:border-purple-400"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
