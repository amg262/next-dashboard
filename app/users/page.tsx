import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Users</h1>
        </div>
        <Button>Add User</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Input placeholder="Search users..." className="max-w-sm" />
            <Button variant="secondary">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">001</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost">Edit</Button>
                  <Button variant="ghost" className="text-red-500">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">002</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost">Edit</Button>
                  <Button variant="ghost" className="text-red-500">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">003</TableCell>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>User</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost">Edit</Button>
                  <Button variant="ghost" className="text-red-500">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

