"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react"
import type React from "react"

// Define our column interface for type safety
type Column<T> = {
  key: keyof T
  label: string
  format?: (value: any) => string
}

// Extended props interface with pagination controls
type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
  onSort: (column: keyof T) => void
  sortColumn: keyof T
  sortDirection: "asc" | "desc"
  pageSize: number | "all"
  currentPage: number
  onPageSizeChange: (size: number | "all") => void
  onPageChange: (page: number) => void
}

export function DataTable<T>({
  data,
  columns,
  onSort,
  sortColumn,
  sortDirection,
  pageSize,
  currentPage,
  onPageSizeChange,
  onPageChange,
}: DataTableProps<T>) {
  // Calculate total pages based on the data length and page size
  const totalPages = pageSize === "all" ? 1 : Math.ceil(data.length / Number(pageSize))

  // Calculate the current page's data slice
  const paginatedData =
    pageSize === "all" ? data : data.slice((currentPage - 1) * Number(pageSize), currentPage * Number(pageSize))

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {/* Page size selector */}
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => {
            onPageSizeChange(value === "all" ? "all" : Number(value))
            onPageChange(1) // Reset to first page when changing page size
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select page size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="25">25 per page</SelectItem>
            <SelectItem value="50">50 per page</SelectItem>
            <SelectItem value="100">100 per page</SelectItem>
            <SelectItem value="all">All records</SelectItem>
          </SelectContent>
        </Select>

        {/* Pagination controls */}
        {pageSize !== "all" && (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Data table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key as string} className="cursor-pointer" onClick={() => onSort(column.key)}>
                  <div className="flex items-center">
                    {column.label}
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key as string}>
                    {column.format ? column.format(item[column.key]) : (item[column.key] as React.ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

