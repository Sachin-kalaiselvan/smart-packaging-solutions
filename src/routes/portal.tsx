import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, Package, AlertCircle, Truck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { toast } from "sonner";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Client Portal — Smart Packaging Solutions" },
      { name: "description", content: "Manage orders, inventory, and grievances" },
    ],
  }),
  component: PortalPage,
});

// Mock clients database - Replace with real database later
const CLIENTS_DB: Record<string, any> = {
  "kumar@kumarfoods.com": {
    password: "kumar123",
    id: "client_001",
    name: "Ravi Kumar",
    company: "Kumar Foods Pvt Ltd",
    email: "kumar@kumarfoods.com",
    phone: "+91 98765 43210",
  },
  "priya@fashionbrand.com": {
    password: "priya123",
    id: "client_002",
    name: "Priya Singh",
    company: "Fashion Brand India",
    email: "priya@fashionbrand.com",
    phone: "+91 97654 32109",
  },
};

// Mock data by client
const CLIENT_DATA: Record<string, any> = {
  client_001: {
    inventory: [
      { id: 1, product: "3-Ply Corrugated Box", sku: "3PLY-2030-15", current: 2500, reorderLevel: 1000, lastOrdered: "2026-05-20", nextDelivery: "2026-06-03" },
      { id: 2, product: "5-Ply Heavy Duty", sku: "5PLY-3025-20", current: 450, reorderLevel: 500, lastOrdered: "2026-05-18", nextDelivery: "2026-06-01" },
      { id: 3, product: "E-commerce Mailer", sku: "MAIL-2020-12", current: 150, reorderLevel: 500, lastOrdered: "2026-05-15", nextDelivery: "2026-05-30" },
    ],
    orders: [
      { id: "ORD-001", date: "2026-05-15", product: "3-Ply Corrugated Box", quantity: 5000, amount: "₹45,000", status: "Delivered", trackingNo: "DL123456789", dispatchDate: "2026-05-18", deliveryDate: "2026-05-22" },
      { id: "ORD-002", date: "2026-05-20", product: "5-Ply Heavy Duty", quantity: 2000, amount: "₹38,000", status: "In Production", trackingNo: "Pending", dispatchDate: "2026-06-01", deliveryDate: "2026-06-05" },
    ],
    grievances: [
      { id: "GRV-001", date: "2026-05-10", orderId: "ORD-001", type: "Quality", description: "Some boxes had slight printing misalignment", status: "Resolved", response: "We reprinted 500 boxes at no charge. Sent on 2026-05-20.", updatedDate: "2026-05-20" },
      { id: "GRV-002", date: "2026-05-21", orderId: "ORD-002", type: "Delay", description: "Expected delivery was 2026-05-28, but still not received", status: "In Progress", response: "Our team is investigating with logistics. Will update within 24 hours.", updatedDate: "2026-05-22" },
    ],
  },
  client_002: {
    inventory: [
      { id: 1, product: "Premium Mono Carton", sku: "MONO-2525-10", current: 5000, reorderLevel: 2000, lastOrdered: "2026-05-10", nextDelivery: "2026-05-25" },
    ],
    orders: [
      { id: "ORD-101", date: "2026-05-10", product: "Premium Mono Carton", quantity: 10000, amount: "₹1,85,000", status: "Delivered", trackingNo: "DL987654321", dispatchDate: "2026-05-12", deliveryDate: "2026-05-15" },
    ],
    grievances: [],
  },
};

function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentClient, setCurrentClient] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("inventory");
  const [newGrievance, setNewGrievance] = useState({ orderId: "", type: "Quality", description: "" });
  const [showGrievanceForm, setShowGrievanceForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const client = CLIENTS_DB[email];
    if (client && client.password === password) {
      setCurrentClient(client);
      setIsLoggedIn(true);
      toast.success(`Welcome, ${client.name}!`);
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentClient(null);
    setEmail("");
    setPassword("");
    toast.success("Logged out successfully");
  };

  const handleSubmitGrievance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGrievance.orderId || !newGrievance.description) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Grievance submitted! We'll respond within 24 hours.");
    setNewGrievance({ orderId: "", type: "Quality", description: "" });
    setShowGrievanceForm(false);
  };

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full rounded-3xl border border-border bg-card shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-brand text-accent-foreground mx-auto mb-4">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="font-display text-2xl font-bold text-primary">Client Portal</h1>
            <p className="mt-2 text-sm text-muted-foreground">Log in to manage your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-brand text-accent-foreground hover:opacity-90">
              Login
            </Button>
          </form>

          <div className="mt-6 rounded-lg bg-muted p-4 text-center">
            <p className="text-xs text-muted-foreground mb-2">Demo Credentials:</p>
            <p className="text-xs font-mono">kumar@kumarfoods.com / kumar123</p>
            <p className="text-xs font-mono">priya@fashionbrand.com / priya123</p>
          </div>
        </motion.div>
      </div>
    );
  }

  // PORTAL PAGE
  const clientData = CLIENT_DATA[currentClient.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <div className="border-b border-border bg-card shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold text-primary">{currentClient.company}</h1>
              <p className="text-sm text-muted-foreground">Welcome, {currentClient.name}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="inventory" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="grievance" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Grievance</span>
            </TabsTrigger>
          </TabsList>

          {/* INVENTORY TAB */}
          <TabsContent value="inventory" className="space-y-4">
            <div className="mb-4">
              <h2 className="font-display text-xl font-bold text-primary">Current Inventory</h2>
              <p className="text-sm text-muted-foreground">Real-time stock levels</p>
            </div>

            <div className="grid gap-4">
              {clientData.inventory.map((item: any) => {
                const lowStock = item.current < item.reorderLevel;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl border p-6 ${
                      lowStock
                        ? "border-destructive/50 bg-destructive/5"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary">{item.product}</h3>
                        <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                      </div>
                      {lowStock && (
                        <span className="rounded-full bg-destructive/20 px-3 py-1 text-xs font-semibold text-destructive">
                          LOW STOCK ⚠️
                        </span>
                      )}
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Current Stock</p>
                        <p className="mt-1 font-display text-2xl font-bold text-primary">
                          {item.current.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Reorder Level</p>
                        <p className="mt-1 font-display text-2xl font-bold text-accent">
                          {item.reorderLevel.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Next Delivery</p>
                        <p className="mt-1 font-semibold">{item.nextDelivery}</p>
                      </div>
                    </div>

                    {lowStock && (
                      <Button className="mt-4 w-full bg-gradient-brand text-accent-foreground hover:opacity-90">
                        Reorder Now
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* ORDER TRACKING TAB */}
          <TabsContent value="orders" className="space-y-4">
            <div className="mb-4">
              <h2 className="font-display text-xl font-bold text-primary">Order History & Tracking</h2>
              <p className="text-sm text-muted-foreground">View all past and current orders</p>
            </div>

            <div className="grid gap-4">
              {clientData.orders.map((order: any) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-primary">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "In Production"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Product</p>
                      <p className="font-semibold text-foreground">{order.product}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Quantity</p>
                      <p className="font-semibold text-foreground">{order.quantity.toLocaleString()} units</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Amount</p>
                      <p className="font-display font-bold text-accent">{order.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Tracking</p>
                      <p className="font-semibold text-foreground">{order.trackingNo}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                        📦
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Dispatch</p>
                        <p className="font-semibold">{order.dispatchDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                        🚚
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Expected Delivery</p>
                        <p className="font-semibold">{order.deliveryDate}</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-4 w-full">
                    Download Invoice (PDF)
                  </Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* GRIEVANCE TAB */}
          <TabsContent value="grievance" className="space-y-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-primary">Grievance & Support</h2>
                <p className="text-sm text-muted-foreground">Track issues and resolutions</p>
              </div>
              <Button 
                onClick={() => setShowGrievanceForm(!showGrievanceForm)}
                className="bg-gradient-brand text-accent-foreground hover:opacity-90"
              >
                + File New Grievance
              </Button>
            </div>

            {/* NEW GRIEVANCE FORM */}
            {showGrievanceForm && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-accent/30 bg-accent/5 p-6 mb-6"
              >
                <h3 className="font-semibold text-primary mb-4">Submit a New Grievance</h3>
                <form onSubmit={handleSubmitGrievance} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>Order ID</Label>
                      <select
                        value={newGrievance.orderId}
                        onChange={(e) => setNewGrievance({ ...newGrievance, orderId: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select an order</option>
                        {clientData.orders.map((o: any) => (
                          <option key={o.id} value={o.id}>{o.id}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Issue Type</Label>
                      <select
                        value={newGrievance.type}
                        onChange={(e) => setNewGrievance({ ...newGrievance, type: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option>Quality</option>
                        <option>Delay</option>
                        <option>Damage</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Description</Label>
                    <Textarea
                      placeholder="Describe the issue..."
                      value={newGrievance.description}
                      onChange={(e) => setNewGrievance({ ...newGrievance, description: e.target.value })}
                      className="min-h-24"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
                      Submit Grievance
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowGrievanceForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* EXISTING GRIEVANCES */}
            <div className="grid gap-4">
              {clientData.grievances.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-muted-foreground/30 p-8 text-center">
                  <p className="text-muted-foreground">No grievances filed yet</p>
                </div>
              ) : (
                clientData.grievances.map((grv: any) => (
                  <motion.div
                    key={grv.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-primary">{grv.id}</h3>
                        <p className="text-sm text-muted-foreground">{grv.date}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          grv.status === "Resolved"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {grv.status}
                      </span>
                    </div>

                    <div className="mb-3 space-y-1">
                      <p className="text-xs text-muted-foreground">Order Referenced</p>
                      <p className="font-semibold text-foreground">{grv.orderId}</p>
                      <p className="text-xs text-muted-foreground mt-2">Issue Type</p>
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {grv.type}
                      </span>
                    </div>

                    <div className="rounded-lg bg-muted/50 p-3 my-3">
                      <p className="text-sm text-foreground">{grv.description}</p>
                    </div>

                    <div className="rounded-lg bg-accent/10 p-3">
                      <p className="text-xs text-muted-foreground mb-1">Our Response ({grv.updatedDate})</p>
                      <p className="text-sm text-foreground">{grv.response}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
