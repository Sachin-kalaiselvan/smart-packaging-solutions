import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logo from "@/assets/logo.jpeg";

export function LoginDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <img src={logo} alt="Smart Packaging Solutions" className="h-14 w-14 rounded-full ring-2 ring-accent/40" />
          </div>
          <DialogTitle className="text-center font-display text-xl text-primary">Welcome to Smart Packaging</DialogTitle>
          <DialogDescription className="text-center">
            Sign in to manage orders, track shipments, and access wholesale pricing.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signin" className="mt-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4 pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Demo only — connect Lovable Cloud to enable real login.");
                onOpenChange(false);
              }}
              className="space-y-3"
            >
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full bg-gradient-brand text-accent-foreground hover:opacity-90">
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 pt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Demo only — connect Lovable Cloud to enable signup.");
                onOpenChange(false);
              }}
              className="space-y-3"
            >
              <div className="space-y-1.5">
                <Label htmlFor="name">Company / Name</Label>
                <Input id="name" placeholder="Acme Inc." required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email2">Email</Label>
                <Input id="email2" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password2">Password</Label>
                <Input id="password2" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
