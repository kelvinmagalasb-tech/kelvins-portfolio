import React from 'react';
import { AdminOrdersView } from '@/components/AdminOrdersView';
import ProtectedRoute from '@/components/ProtectedRoute';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage your design orders and customer inquiries</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Cards */}
          <AnimatedSection animation="slide-up" className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">--</div>
                <p className="text-xs text-muted-foreground">All time orders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  <span>--</span>
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">--</div>
                <p className="text-xs text-muted-foreground">Awaiting action</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <span>--</span>
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">--</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+---%</div>
                <p className="text-xs text-muted-foreground">vs last month</p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Orders Management */}
          <AnimatedSection animation="slide-up" delay={0.2}>
            <AdminOrdersView />
          </AnimatedSection>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;