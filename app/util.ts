export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US").format(value)
}

export const formatShortCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`
  }
  return `$${value.toFixed(0)}`
}

export function exportToCSV<T>(data: T[], columns: { key: keyof T; label: string }[], filename: string): void {
  const csvContent = [
    columns.map((col) => col.label).join(","),
    ...data.map((item) =>
      columns
        .map((col) => {
          const value = item[col.key]
          return typeof value === "string" && value.includes(",") ? `"${value}"` : value
        })
        .join(","),
    ),
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", filename)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

