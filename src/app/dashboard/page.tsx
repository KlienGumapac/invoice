"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { CreateInvoiceModal } from "./modals/create-invoice-modal";
import { 
  Plus, 
  DollarSign, 
  FileText, 
  TrendingUp, 
  Clock,
  Eye,
  Download,
  MoreHorizontal
} from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreateInvoiceModalOpen, setIsCreateInvoiceModalOpen] = useState(false);

  const summaryData = {
    totalRevenue: 45680.50,
    totalInvoices: 24,
    pendingInvoices: 8,
    paidInvoices: 16
  };

  const invoiceHistory = [
    {
      id: "INV-001",
      client: "Acme Corporation",
      amount: 2500.00,
      status: "paid",
      date: "2024-01-15",
      dueDate: "2024-02-15"
    },
    {
      id: "INV-002", 
      client: "Tech Solutions Inc",
      amount: 1800.00,
      status: "pending",
      date: "2024-01-20",
      dueDate: "2024-02-20"
    },
    {
      id: "INV-003",
      client: "Design Studio LLC",
      amount: 3200.00,
      status: "paid",
      date: "2024-01-18",
      dueDate: "2024-02-18"
    },
    {
      id: "INV-004",
      client: "Marketing Agency",
      amount: 950.00,
      status: "overdue",
      date: "2024-01-10",
      dueDate: "2024-01-25"
    },
    {
      id: "INV-005",
      client: "Consulting Firm",
      amount: 4200.00,
      status: "paid",
      date: "2024-01-22",
      dueDate: "2024-02-22"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200";
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
          title="Dashboard"
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
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(summaryData.totalRevenue)}</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summaryData.totalInvoices}</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summaryData.pendingInvoices}</div>
                <p className="text-xs text-muted-foreground">
                  Awaiting payment
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Paid Invoices</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summaryData.paidInvoices}</div>
                <p className="text-xs text-muted-foreground">
                  66.7% success rate
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Invoice History Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Recent Invoices</h2>
                <p className="text-muted-foreground">Manage and track your invoices</p>
              </div>
              <Button 
                className="w-full sm:w-auto"
                onClick={() => setIsCreateInvoiceModalOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create New Invoice
              </Button>
            </div>

            {/* Desktop Invoice List - Table-like layout */}
            <Card className="shadow-sm hidden md:block">
              <CardContent className="p-0">
                {/* Header Row */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b bg-muted/30 text-sm font-medium text-muted-foreground">
                  <div className="col-span-3">Invoice</div>
                  <div className="col-span-3">Client</div>
                  <div className="col-span-2">Amount</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>

                {/* Invoice Rows */}
                {invoiceHistory.map((invoice, index) => (
                  <div 
                    key={invoice.id} 
                    className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-muted/50 transition-colors ${
                      index !== invoiceHistory.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div className="col-span-3">
                      <div className="font-medium">{invoice.id}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(invoice.date)}
                      </div>
                    </div>
                    
                    <div className="col-span-3">
                      <div className="font-medium">{invoice.client}</div>
                      <div className="text-sm text-muted-foreground">
                        Due {formatDate(invoice.dueDate)}
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="font-semibold">{formatCurrency(invoice.amount)}</div>
                    </div>
                    
                    <div className="col-span-2">
                      <Badge 
                        variant="outline" 
                        className={`${getStatusColor(invoice.status)} border`}
                      >
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
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

            {/* Mobile Invoice List - Simplified layout */}
            <div className="md:hidden space-y-3">
              {invoiceHistory.map((invoice, index) => (
                <Card key={invoice.id} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-lg truncate">{invoice.client}</div>
                        <div className="text-sm text-muted-foreground">{invoice.id}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="font-semibold text-lg">{formatCurrency(invoice.amount)}</div>
                        <Badge 
                          variant="outline" 
                          className={`${getStatusColor(invoice.status)} border text-xs`}
                        >
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="text-xs text-muted-foreground">
                        {formatDate(invoice.date)} • Due {formatDate(invoice.dueDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
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

            {/* Empty State (if no invoices) */}
            {invoiceHistory.length === 0 && (
              <Card className="shadow-sm">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No invoices yet</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Create your first invoice to get started with QuickBill
                  </p>
                  <Button onClick={() => setIsCreateInvoiceModalOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Invoice
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>

      {/* Create Invoice Modal */}
      <CreateInvoiceModal
        isOpen={isCreateInvoiceModalOpen}
        onClose={() => setIsCreateInvoiceModalOpen(false)}
      />
    </div>
  );
}
