"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { 
  Download,
  TrendingUp,
  TrendingDown,
  DollarSign,
  FileText,
  Users,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  RefreshCw
} from "lucide-react";

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const overviewStats = {
    totalRevenue: 45680.50,
    totalInvoices: 24,
    paidInvoices: 18,
    pendingInvoices: 4,
    overdueInvoices: 2,
    averageInvoiceValue: 1903.35,
    totalClients: 15,
    activeClients: 12,
    revenueGrowth: 15.2,
    invoiceGrowth: 8.5,
    clientGrowth: 12.0
  };

  const monthlyRevenue = [
    { month: "Jan", revenue: 12000, invoices: 8 },
    { month: "Feb", revenue: 15000, invoices: 10 },
    { month: "Mar", revenue: 18000, invoices: 12 },
    { month: "Apr", revenue: 22000, invoices: 14 },
    { month: "May", revenue: 19000, invoices: 11 },
    { month: "Jun", revenue: 25000, invoices: 16 }
  ];

  const topClients = [
    { name: "Acme Corporation", revenue: 8500, invoices: 5, growth: 12.5 },
    { name: "Tech Solutions Inc", revenue: 7200, invoices: 4, growth: 8.3 },
    { name: "Design Studio LLC", revenue: 6800, invoices: 6, growth: 15.2 },
    { name: "Marketing Agency", revenue: 5200, invoices: 3, growth: -2.1 },
    { name: "Consulting Firm", revenue: 4800, invoices: 4, growth: 5.7 }
  ];

  const invoiceStatusBreakdown = [
    { status: "Paid", count: 18, percentage: 75, color: "bg-emerald-500" },
    { status: "Pending", count: 4, percentage: 16.7, color: "bg-yellow-500" },
    { status: "Overdue", count: 2, percentage: 8.3, color: "bg-red-500" }
  ];

  const recentActivity = [
    { type: "invoice_paid", description: "Invoice #INV-001 paid by Acme Corporation", amount: 2500, time: "2 hours ago" },
    { type: "invoice_created", description: "New invoice #INV-025 created for Tech Solutions", amount: 1800, time: "4 hours ago" },
    { type: "client_added", description: "New client 'Design Studio LLC' added", amount: null, time: "1 day ago" },
    { type: "invoice_overdue", description: "Invoice #INV-020 is now overdue", amount: 950, time: "2 days ago" },
    { type: "invoice_paid", description: "Invoice #INV-015 paid by Marketing Agency", amount: 3200, time: "3 days ago" }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "invoice_paid":
        return <TrendingUp className="h-4 w-4 text-emerald-500" />;
      case "invoice_created":
        return <FileText className="h-4 w-4 text-blue-500" />;
      case "client_added":
        return <Users className="h-4 w-4 text-purple-500" />;
      case "invoice_overdue":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Header */}
        <AppHeader
          title="Reports"
          onSidebarToggle={() => setSidebarOpen(true)}
          secondaryAction={{
            label: "Export Report",
            icon: <Download className="h-4 w-4 mr-2" />,
            onClick: () => console.log("Export Report clicked")
          }}
        />

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-8">
          {/* Period Selector */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Analytics Overview</h2>
              <p className="text-muted-foreground">Track your business performance and insights</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Button
                  variant={selectedPeriod === "7d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("7d")}
                >
                  7D
                </Button>
                <Button
                  variant={selectedPeriod === "30d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("30d")}
                >
                  30D
                </Button>
                <Button
                  variant={selectedPeriod === "90d" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod("90d")}
                >
                  90D
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(overviewStats.totalRevenue)}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+{overviewStats.revenueGrowth}%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overviewStats.totalInvoices}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+{overviewStats.invoiceGrowth}%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overviewStats.activeClients}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+{overviewStats.clientGrowth}%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Invoice Value</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(overviewStats.averageInvoiceValue)}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />
                  <span className="text-emerald-500">+5.2%</span>
                  <span className="ml-1">from last period</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Detailed Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Trend */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Revenue Trend
                </CardTitle>
                <CardDescription>Monthly revenue and invoice count</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyRevenue.map((month, index) => (
                    <div key={month.month} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 text-sm font-medium">{month.month}</div>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(month.revenue / 25000) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{formatCurrency(month.revenue)}</div>
                        <div className="text-xs text-muted-foreground">{month.invoices} invoices</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Invoice Status Breakdown */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Invoice Status
                </CardTitle>
                <CardDescription>Distribution of invoice statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoiceStatusBreakdown.map((item, index) => (
                    <div key={item.status} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium">{item.status}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{item.count}</div>
                        <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Invoices</span>
                    <span className="font-semibold">{overviewStats.totalInvoices}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Clients and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Clients */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Top Clients
                </CardTitle>
                <CardDescription>Highest revenue generating clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topClients.map((client, index) => (
                    <div key={client.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-xs text-muted-foreground">{client.invoices} invoices</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{formatCurrency(client.revenue)}</div>
                        <div className={`text-xs flex items-center justify-end ${
                          client.growth >= 0 ? 'text-emerald-500' : 'text-red-500'
                        }`}>
                          {client.growth >= 0 ? (
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-3 w-3 mr-1" />
                          )}
                          {Math.abs(client.growth)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest business activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{activity.description}</div>
                        {activity.amount && (
                          <div className="text-sm text-muted-foreground">
                            {formatCurrency(activity.amount)}
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-emerald-500">{overviewStats.paidInvoices}</div>
                <div className="text-xs text-muted-foreground">Paid Invoices</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500">{overviewStats.pendingInvoices}</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-500">{overviewStats.overdueInvoices}</div>
                <div className="text-xs text-muted-foreground">Overdue</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">{overviewStats.totalClients}</div>
                <div className="text-xs text-muted-foreground">Total Clients</div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 sm:flex-none">
              <Download className="h-4 w-4 mr-2" />
              Download Full Report
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              <BarChart3 className="h-4 w-4 mr-2" />
              Generate Custom Report
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
