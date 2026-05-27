import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, Package, AlertCircle, Truck, Lock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — Smart Packaging Solutions" },
      { name: "description", content: "Admin dashboard" },
    ],
  }),
  component: AdminPage,
});

const ADMIN_PASSWORD = "admin123"; // Change this to a secure password

// All client data
const ALL_CLIENTS_DATA: Record<string, any> = {
  client_001: {
    name: "Ravi Kumar",
    company: "Kumar Foods Pvt Ltd",
    email: "kumar@kumarfoods.com",
    phone: "+91 98765 43210",
    inventory: [
      { id: 1, product: "3-Ply Corrugated Box", sku: "3PLY-2030-15", current: 2500, reorderLevel: 1000 },
      { id: 2, product: "5-Ply Heavy Duty", sku: "5PLY-3025-20", current: 450, reorderLevel: 500 },
      { id: 3, product: "E-commerce Mailer", sku: "MAIL-2020-12", current: 150, reorderLevel: 500 },
    ],
    orders: [
      { id: "ORD-001", date: "2026-05-15", product: "3-Ply Corrugated Box", quantity: 5000, amount: "₹45,000", status: "Delivered" },
      { id: "ORD-002", date: "2026-05-20", product: "5-Ply Heavy Duty", quantity: 2000, amount: "₹38,000", status: "In Production" },
    ],
    grievances: [
      { id: "GRV-001", date: "2026-05-10", orderId: "ORD-001", type: "Quality", description: "Some boxes had slight printing misalignment", status: "Resolved", response: "We reprinted 500 boxes at no charge." },
      { id: "GRV-002", date: "2026-05-21", orderId: "ORD-002", type: "Delay", description: "Expected delivery was 2026-05-28", status: "In Progress", response: "Investigating with logistics." },
    ],
  },
  client_002: {
    name: "Priya Singh",
    company: "Fashion Brand India",
    email: "priya@fashionbrand.com",
    phone: "+91 97654 32109",
    inventory: [
      { id: 1, product: "Premium Mono Carton", sku: "MONO-2525-10", current: 5000, reorderLevel: 2000 },
    ],
    orders: [
      { id: "ORD-101", date: "2026-05-10", product: "Premium Mono Carton", quantity: 10000, amount: "₹1,85,000", status: "Delivered" },
    ],
    grievances: [],
  },
};

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("clients");
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [editingInventory, setEditingInventory] = useState<any>(null);
  const [editingGrievance, setEditingGrievance] = useState<any>(null);
  const [editingOrder, setEditingOrder] = useState<any>(null);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      toast.success("Admin logged in successfully");
    } else {
      toast.error("Invalid admin password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword("");
    setSelectedClient(null);
    toast.success("Logged out");
  };

  const handleUpdateInventory = (clientId: string, itemId: number, newQuantity: number) => {
    const client = ALL_CLIENTS_DATA[clientId];
    const item = client.inventory.find((i: any) => i.id === itemId);
    if (item) {
      item.current = newQuantity;
      toast.success(`Updated inventory for ${item.product}`);
      setEditingInventory(null);
    }
  };

  const handleUpdateOrder = (clientId: string, orderId: string, newStatus: string) => {
    const client = ALL_CLIENTS_DATA[clientId];
    const order = client.orders.find((o: any) => o.id === orderId);
    if (order) {
      order.status = newStatus;
      toast.success(`Updated order ${orderId} status to ${newStatus}`);
      setEditingOrder(null);
    }
  };

  const handleRespondToGrievance = (clientId: string, grvId: string, response: string) => {
    const client = ALL_CLIENTS_DATA[clientId];
    const grv = client.grievances.find((g: any) => g.id === grvId);
    if (grv) {
      grv.response = response;
      grv.status = "Resolved";
      grv.updatedDate = new Date().toISOString().split("T")[0];
      toast.success(`Responded to grievance ${grvId}`);
      setEditingGrievance(null);
    }
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
            <h1 className="font-display text-2xl font-bold text-primary">Admin Panel</h1>
            <p className="mt-2 text-sm text-muted-foreground">Enter admin password</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="password">Admin Password</Label>
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
              Login as Admin
            </Button>
          </form>

          <div className="mt-6 rounded-lg bg-muted p-4 text-center">
            <p className="text-xs text-muted-foreground">Demo Password: admin123</p>
          </div>
        </motion.div>
      </div>
    );
  }

  // ADMIN PANEL
  const clients = Object.entries(ALL_CLIENTS_DATA);
  const currentClientData = selectedClient ? ALL_CLIENTS_DATA[selectedClient] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Header */}
      <div className="border-b border-border bg-card shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl font-bold text-primary">🔐 Admin Dashboard</h1>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="clients" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>All Clients</span>
            </TabsTrigger>
            <TabsTrigger value="manage" disabled={!selectedClient} className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              <span>Manage Client</span>
            </TabsTrigger>
          </TabsList>

          {/* ALL CLIENTS */}
          <TabsContent value="clients" className="space-y-4">
            <h2 className="font-display text-xl font-bold text-primary mb-4">All Clients</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {clients.map(([clientId, client]) => (
                <motion.div
                  key={clientId}
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    setSelectedClient(clientId);
                    setActiveTab("manage");
                  }}
                  className="rounded-2xl border border-border bg-card p-6 cursor-pointer hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-display font-bold text-primary">{client.company}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{client.name}</p>
                  <p className="text-xs text-muted-foreground mt-2">{client.email}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Orders</p>
                      <p className="font-bold text-primary">{client.orders.length}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Grievances</p>
                      <p className="font-bold text-accent">{client.grievances.length}</p>
                    </div>
                    <Button size="sm" className="bg-gradient-brand text-accent-foreground hover:opacity-90">
                      Manage →
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* MANAGE CLIENT */}
          {currentClientData && (
            <TabsContent value="manage" className="space-y-8">
              <div>
                <button
                  onClick={() => {
                    setSelectedClient(null);
                    setActiveTab("clients");
                  }}
                  className="text-sm text-accent hover:underline mb-4"
                >
                  ← Back to all clients
                </button>
                <h2 className="font-display text-2xl font-bold text-primary">{currentClientData.company}</h2>
                <p className="text-muted-foreground">{currentClientData.name} • {currentClientData.phone}</p>
              </div>

              {/* MANAGE INVENTORY */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-primary flex items-center gap-2">
                  <Package className="h-5 w-5" /> Inventory Management
                </h3>
                <div className="grid gap-3">
                  {currentClientData.inventory.map((item: any) => (
                    <div key={item.id} className="rounded-xl border border-border bg-card p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-primary">{item.product}</p>
                          <p className="text-xs text-muted-foreground">Current: {item.current} units</p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setEditingInventory(item.id)}
                          variant="outline"
                        >
                          Edit
                        </Button>
                      </div>
                      {editingInventory === item.id && (
                        <div className="mt-3 space-y-2 pt-3 border-t border-border">
                          <Input
                            type="number"
                            defaultValue={item.current}
                            placeholder="New quantity"
                            onChange={(e) => {
                              const newQty = parseInt(e.target.value);
                              handleUpdateInventory(selectedClient!, item.id, newQty);
                            }}
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* MANAGE ORDERS */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-primary flex items-center gap-2">
                  <Truck className="h-5 w-5" /> Order Management
                </h3>
                <div className="grid gap-3">
                  {currentClientData.orders.map((order: any) => (
                    <div key={order.id} className="rounded-xl border border-border bg-card p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-primary">{order.id}</p>
                          <p className="text-xs text-muted-foreground">{order.product} • {order.quantity} units</p>
                          <p className="text-xs mt-1">Status: <span className="font-semibold">{order.status}</span></p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => setEditingOrder(order.id)}
                          variant="outline"
                        >
                          Update
                        </Button>
                      </div>
                      {editingOrder === order.id && (
                        <div className="mt-3 space-y-2 pt-3 border-t border-border">
                          <select
                            defaultValue={order.status}
                            onChange={(e) => handleUpdateOrder(selectedClient!, order.id, e.target.value)}
                            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          >
                            <option>Sample Approved</option>
                            <option>In Production</option>
                            <option>Ready for Dispatch</option>
                            <option>Dispatched</option>
                            <option>Delivered</option>
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* MANAGE GRIEVANCES */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-primary flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" /> Grievance Management
                </h3>
                {currentClientData.grievances.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-muted-foreground/30 p-6 text-center">
                    <p className="text-muted-foreground">No grievances</p>
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {currentClientData.grievances.map((grv: any) => (
                      <div key={grv.id} className="rounded-xl border border-border bg-card p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-primary">{grv.id}</p>
                            <p className="text-xs text-muted-foreground">{grv.type} • {grv.date}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            grv.status === "Resolved"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {grv.status}
                          </span>
                        </div>
                        <p className="text-sm text-foreground mb-2">{grv.description}</p>
                        <p className="text-xs text-muted-foreground mb-3">Current response: {grv.response}</p>
                        {grv.status !== "Resolved" && (
                          <Button
                            size="sm"
                            onClick={() => setEditingGrievance(grv.id)}
                            variant="outline"
                          >
                            Respond
                          </Button>
                        )}
                        {editingGrievance === grv.id && (
                          <div className="mt-3 space-y-2 pt-3 border-t border-border">
                            <Textarea
                              placeholder="Write your response..."
                              defaultValue={grv.response}
                              onBlur={(e) => handleRespondToGrievance(selectedClient!, grv.id, e.target.value)}
                              className="min-h-16"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}
