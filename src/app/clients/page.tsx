"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { 
  Plus, 
  Users, 
  UserPlus, 
  DollarSign, 
  FileText,
  Eye,
  Edit,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Download
} from "lucide-react";

export default function ClientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const summaryData = {
    totalClients: 24,
    activeClients: 18,
    totalRevenue: 45680.50,
    averageOrderValue: 1903.35
  };

  const clientsData = [
    {
      id: "CLI-001",
      name: "Acme Corporation",
      email: "contact@acme.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      status: "active",
      totalInvoices: 12,
      totalSpent: 25000.00,
      lastInvoice: "2024-01-15"
    },
    {
      id: "CLI-002",
      name: "Tech Solutions Inc",
      email: "hello@techsolutions.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      status: "active",
      totalInvoices: 8,
      totalSpent: 18000.00,
      lastInvoice: "2024-01-20"
    },
    {
      id: "CLI-003",
      name: "Design Studio LLC",
      email: "info@designstudio.com",
      phone: "+1 (555) 456-7890",
      location: "Los Angeles, CA",
      status: "active",
      totalInvoices: 15,
      totalSpent: 32000.00,
      lastInvoice: "2024-01-18"
    },
    {
      id: "CLI-004",
      name: "Marketing Agency",
      email: "team@marketing.com",
      phone: "+1 (555) 321-0987",
      location: "Chicago, IL",
      status: "inactive",
      totalInvoices: 3,
      totalSpent: 4500.00,
      lastInvoice: "2023-12-10"
    },
    {
      id: "CLI-005",
      name: "Consulting Firm",
      email: "contact@consulting.com",
      phone: "+1 (555) 654-3210",
      location: "Boston, MA",
      status: "active",
      totalInvoices: 6,
      totalSpent: 12000.00,
      lastInvoice: "2024-01-22"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <AppHeader
          title="Clients"
          onSidebarToggle={() => setSidebarOpen(true)}
          secondaryAction={{
            label: "Export",
            icon: <Download className="h-4 w-4 mr-2" />,
            onClick: () => console.log("Export clicked")
          }}
        />

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summaryData.totalClients}</div>
                <p className="text-xs text-muted-foreground">
                  +3 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summaryData.activeClients}</div>
                <p className="text-xs text-muted-foreground">
                  75% of total clients
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(summaryData.totalRevenue)}</div>
                <p className="text-xs text-muted-foreground">
                  +15.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(summaryData.averageOrderValue)}</div>
                <p className="text-xs text-muted-foreground">
                  Per client
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Clients Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">All Clients</h2>
                <p className="text-muted-foreground">Manage your client relationships</p>
              </div>
              <Button className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Add New Client
              </Button>
            </div>

            {/* Desktop Clients List - Table-like layout */}
            <Card className="shadow-sm hidden md:block">
              <CardContent className="p-0">
                {/* Header Row */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b bg-muted/30 text-sm font-medium text-muted-foreground">
                  <div className="col-span-3">Client</div>
                  <div className="col-span-2">Contact</div>
                  <div className="col-span-2">Location</div>
                  <div className="col-span-2">Total Spent</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>

                {/* Client Rows */}
                {clientsData.map((client, index) => (
                  <div 
                    key={client.id} 
                    className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-muted/50 transition-colors ${
                      index !== clientsData.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div className="col-span-3">
                      <div className="font-medium">{client.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {client.id} • {client.totalInvoices} invoices
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="text-sm font-medium">{client.email}</div>
                      <div className="text-sm text-muted-foreground">
                        {client.phone}
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="text-sm">{client.location}</div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="font-semibold">{formatCurrency(client.totalSpent)}</div>
                      <div className="text-sm text-muted-foreground">
                        Last: {formatDate(client.lastInvoice)}
                      </div>
                    </div>
                    
                    <div className="col-span-1">
                      <Badge 
                        variant="outline" 
                        className={`${getStatusColor(client.status)} border text-xs`}
                      >
                        {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Mobile Clients List - Simplified layout */}
            <div className="md:hidden space-y-3">
              {clientsData.map((client, index) => (
                <Card key={client.id} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-lg truncate">{client.name}</div>
                        <div className="text-sm text-muted-foreground">{client.id}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="font-semibold text-lg">{formatCurrency(client.totalSpent)}</div>
                        <Badge 
                          variant="outline" 
                          className={`${getStatusColor(client.status)} border text-xs`}
                        >
                          {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="truncate">{client.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{client.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{client.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="text-xs text-muted-foreground">
                        {client.totalInvoices} invoices • Last: {formatDate(client.lastInvoice)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State (if no clients) */}
            {clientsData.length === 0 && (
              <Card className="shadow-sm">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No clients yet</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Add your first client to start managing relationships
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Client
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
