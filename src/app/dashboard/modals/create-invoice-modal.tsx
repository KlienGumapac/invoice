"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  X, 
  Plus, 
  Trash2, 
  CreditCard, 
  Check,
  Calculator,
  FileText
} from "lucide-react";

interface CreateInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
  tax: number;
  timeType: 'days' | 'hours';
  timeValue: number;
  description: string;
}

interface Payment {
  id: string;
  type: string;
  amount: number;
  reference: string;
}

export function CreateInvoiceModal({ isOpen, onClose }: CreateInvoiceModalProps) {
  const [selectedClient, setSelectedClient] = useState("");
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      name: "",
      price: 0,
      quantity: 1,
      discount: 0,
      tax: 0,
      timeType: 'days',
      timeValue: 1,
      description: ""
    }
  ]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isPaid, setIsPaid] = useState(false);

  const clients = [
    { id: "1", name: "Acme Corporation", email: "contact@acme.com" },
    { id: "2", name: "Tech Solutions Inc", email: "hello@techsolutions.com" },
    { id: "3", name: "Design Studio LLC", email: "info@designstudio.com" },
    { id: "4", name: "Marketing Agency", email: "team@marketing.com" },
    { id: "5", name: "Consulting Firm", email: "contact@consulting.com" }
  ];

  const addItem = () => {
    const newItem: Item = {
      id: Date.now().toString(),
      name: "",
      price: 0,
      quantity: 1,
      discount: 0,
      tax: 0,
      timeType: 'days',
      timeValue: 1,
      description: ""
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof Item, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addPayment = () => {
    const newPayment: Payment = {
      id: Date.now().toString(),
      type: "Credit Card",
      amount: 0,
      reference: ""
    };
    setPayments([...payments, newPayment]);
  };

  const removePayment = (id: string) => {
    setPayments(payments.filter(payment => payment.id !== id));
  };

  const updatePayment = (id: string, field: keyof Payment, value: string | number) => {
    setPayments(payments.map(payment => 
      payment.id === id ? { ...payment, [field]: value } : payment
    ));
  };

  const calculateItemTotal = (item: Item) => {
    const subtotal = item.price * item.quantity;
    const discountAmount = (subtotal * item.discount) / 100;
    const afterDiscount = subtotal - discountAmount;
    const taxAmount = (afterDiscount * item.tax) / 100;
    return afterDiscount + taxAmount;
  };

  const subtotal = items.reduce((sum, item) => {
    const itemSubtotal = item.price * item.quantity;
    return sum + itemSubtotal;
  }, 0);

  const totalDiscount = items.reduce((sum, item) => {
    const itemSubtotal = item.price * item.quantity;
    return sum + (itemSubtotal * item.discount) / 100;
  }, 0);

  const totalTax = items.reduce((sum, item) => {
    const itemSubtotal = item.price * item.quantity;
    const discountAmount = (itemSubtotal * item.discount) / 100;
    const afterDiscount = itemSubtotal - discountAmount;
    return sum + (afterDiscount * item.tax) / 100;
  }, 0);

  const totalAmount = subtotal - totalDiscount + totalTax;
  const totalPayments = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const balance = totalAmount - totalPayments;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-semibold">Create New Invoice</h2>
            <p className="text-muted-foreground">Fill in the details to create a new invoice</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Main Content */}
          <div className="flex-1">
            <ScrollArea className="h-full">
              <div className="p-6 space-y-6">
                {/* Client Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Client Information</CardTitle>
                    <CardDescription>Select the client for this invoice</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="client">Select Client</Label>
                      <select
                        id="client"
                        value={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">Choose a client...</option>
                        {clients.map(client => (
                          <option key={client.id} value={client.id}>
                            {client.name} - {client.email}
                          </option>
                        ))}
                      </select>
                    </div>
                  </CardContent>
                </Card>

                {/* Items Section */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Invoice Items</CardTitle>
                        <CardDescription>Add items to include in this invoice</CardDescription>
                      </div>
                      <Button onClick={addItem} size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Item
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item, index) => (
                      <div key={item.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Item {index + 1}</h4>
                          {items.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`item-name-${item.id}`}>Item Name</Label>
                            <Input
                              id={`item-name-${item.id}`}
                              value={item.name}
                              onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                              placeholder="Enter item name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`item-price-${item.id}`}>Price</Label>
                            <Input
                              id={`item-price-${item.id}`}
                              type="number"
                              value={item.price}
                              onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                              placeholder="0.00"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor={`item-quantity-${item.id}`}>Quantity</Label>
                            <Input
                              id={`item-quantity-${item.id}`}
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                              min="1"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`item-discount-${item.id}`}>Discount (%)</Label>
                            <Input
                              id={`item-discount-${item.id}`}
                              type="number"
                              value={item.discount}
                              onChange={(e) => updateItem(item.id, 'discount', parseFloat(e.target.value) || 0)}
                              placeholder="0"
                              min="0"
                              max="100"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`item-tax-${item.id}`}>Tax (%)</Label>
                            <Input
                              id={`item-tax-${item.id}`}
                              type="number"
                              value={item.tax}
                              onChange={(e) => updateItem(item.id, 'tax', parseFloat(e.target.value) || 0)}
                              placeholder="0"
                              min="0"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Time Period</Label>
                            <div className="flex gap-2">
                              <Input
                                type="number"
                                value={item.timeValue}
                                onChange={(e) => updateItem(item.id, 'timeValue', parseInt(e.target.value) || 1)}
                                min="1"
                                className="flex-1"
                              />
                              <select
                                value={item.timeType}
                                onChange={(e) => updateItem(item.id, 'timeType', e.target.value as 'days' | 'hours')}
                                className="px-3 py-2 border rounded-md"
                              >
                                <option value="days">Days</option>
                                <option value="hours">Hours</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`item-description-${item.id}`}>Description</Label>
                            <Input
                              id={`item-description-${item.id}`}
                              value={item.description}
                              onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                              placeholder="Item description (optional)"
                            />
                          </div>
                        </div>

                        <div className="text-right text-sm text-muted-foreground">
                          Item Total: <span className="font-semibold">{formatCurrency(calculateItemTotal(item))}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Payments Section */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Payments</CardTitle>
                        <CardDescription>Add payment methods and amounts</CardDescription>
                      </div>
                      <Button onClick={addPayment} size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Payment
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {payments.map((payment, index) => (
                      <div key={payment.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">Payment {index + 1}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removePayment(payment.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>Payment Type</Label>
                            <select
                              value={payment.type}
                              onChange={(e) => updatePayment(payment.id, 'type', e.target.value)}
                              className="w-full p-2 border rounded-md"
                            >
                              <option value="Credit Card">Credit Card</option>
                              <option value="Bank Transfer">Bank Transfer</option>
                              <option value="Cash">Cash</option>
                              <option value="Check">Check</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label>Amount</Label>
                            <Input
                              type="number"
                              value={payment.amount}
                              onChange={(e) => updatePayment(payment.id, 'amount', parseFloat(e.target.value) || 0)}
                              placeholder="0.00"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Reference</Label>
                            <Input
                              value={payment.reference}
                              onChange={(e) => updatePayment(payment.id, 'reference', e.target.value)}
                              placeholder="Transaction ID or reference"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Mark as Paid */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <input
                        id="mark-paid"
                        type="checkbox"
                        checked={isPaid}
                        onChange={(e) => setIsPaid(e.target.checked)}
                        className="h-4 w-4 rounded border-input"
                      />
                      <Label htmlFor="mark-paid" className="text-sm font-medium">
                        Mark this invoice as paid
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </div>

          {/* Summary Sidebar */}
          <div className="w-80 border-l bg-muted/30">
            <ScrollArea className="h-full">
              <div className="p-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Invoice Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Discount</span>
                        <span className="text-red-500">-{formatCurrency(totalDiscount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Tax</span>
                        <span className="text-blue-500">+{formatCurrency(totalTax)}</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total Amount</span>
                          <span>{formatCurrency(totalAmount)}</span>
                        </div>
                      </div>
                    </div>

                    {payments.length > 0 && (
                      <div className="space-y-2">
                        <div className="border-t pt-4">
                          <h4 className="font-medium mb-2">Payments</h4>
                          {payments.map((payment, index) => (
                            <div key={payment.id} className="flex justify-between text-sm">
                              <span>{payment.type}</span>
                              <span>{formatCurrency(payment.amount)}</span>
                            </div>
                          ))}
                          <div className="border-t pt-2">
                            <div className="flex justify-between font-medium">
                              <span>Total Paid</span>
                              <span>{formatCurrency(totalPayments)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Balance</span>
                        <span className={balance === 0 ? "text-emerald-500" : balance > 0 ? "text-red-500" : "text-blue-500"}>
                          {formatCurrency(balance)}
                        </span>
                      </div>
                      {balance === 0 && (
                        <Badge className="w-full justify-center mt-2 bg-emerald-100 text-emerald-800">
                          <Check className="h-3 w-3 mr-1" />
                          Fully Paid
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 pt-4">
                      <Button className="w-full" size="lg">
                        <FileText className="h-4 w-4 mr-2" />
                        Create Invoice
                      </Button>
                      <Button variant="outline" className="w-full" onClick={onClose}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
