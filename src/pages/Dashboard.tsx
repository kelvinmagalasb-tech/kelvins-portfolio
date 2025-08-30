import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bell, Calendar, Clock, Download, FileText, LayoutDashboard, MessageSquare, Package, Settings, ShoppingBag, User } from "lucide-react";
import { LivePricingCalculator } from '@/components/LivePricingCalculator';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample user data
  const userData = {
    name: "Kelvin Natalis",
    email: "kelvin@example.com",
    avatar: "/lovable-uploads/5659ebec-1220-4e8a-8001-5242f0105af7.jpg",
    joinDate: "Jan 2023",
    orders: [
      { id: "ORD-7291", date: "2023-06-15", service: "Logo Design", status: "Completed", price: "$120" },
      { id: "ORD-8345", date: "2023-07-22", service: "Website Development", status: "In Progress", price: "$750" },
      { id: "ORD-9012", date: "2023-08-10", service: "Business Card Design", status: "Completed", price: "$85" },
    ],
    notifications: [
      { id: 1, message: "Your order ORD-8345 has been updated", time: "2 hours ago", read: false },
      { id: 2, message: "New design template available", time: "Yesterday", read: true },
      { id: 3, message: "Order ORD-7291 has been completed", time: "3 days ago", read: true },
    ]
  };

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col items-center space-y-3 py-4">
                <Avatar className="h-20 w-20 border-4 border-primary/10">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{userData.name}</h3>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                  <Badge variant="outline" className="mt-2">Member since {userData.joinDate}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-0">
              <nav className="flex flex-col">
                <Button 
                  variant={activeTab === "overview" ? "secondary" : "ghost"} 
                  className="justify-start rounded-none h-12"
                  onClick={() => setActiveTab("overview")}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button 
                  variant={activeTab === "orders" ? "secondary" : "ghost"} 
                  className="justify-start rounded-none h-12"
                  onClick={() => setActiveTab("orders")}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  My Orders
                </Button>
                <Button 
                  variant={activeTab === "profile" ? "secondary" : "ghost"} 
                  className="justify-start rounded-none h-12"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button 
                  variant={activeTab === "pricing" ? "secondary" : "ghost"} 
                  className="justify-start rounded-none h-12"
                  onClick={() => setActiveTab("pricing")}
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Live Pricing
                </Button>
                <Button 
                  variant={activeTab === "notifications" ? "secondary" : "ghost"} 
                  className="justify-start rounded-none h-12"
                  onClick={() => setActiveTab("notifications")}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                  {userData.notifications.filter(n => !n.read).length > 0 && (
                    <Badge className="ml-auto" variant="destructive">{userData.notifications.filter(n => !n.read).length}</Badge>
                  )}
                </Button>
                <Button 
                  variant={activeTab === "settings" ? "secondary" : "ghost"} 
                  className="justify-start rounded-none h-12"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Welcome back, {userData.name.split(' ')[0]}!</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userData.orders.length}</div>
                    <p className="text-xs text-muted-foreground mt-1">+2 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userData.orders.filter(o => o.status === "In Progress").length}</div>
                    <p className="text-xs text-muted-foreground mt-1">In progress</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userData.orders.filter(o => o.status === "Completed").length}</div>
                    <p className="text-xs text-muted-foreground mt-1">Successfully delivered</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your most recent design orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.orders.map(order => (
                      <div key={order.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{order.service}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              <span>{order.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={order.status === "Completed" ? "outline" : "secondary"}>
                            {order.status}
                          </Badge>
                          <span className="font-medium">{order.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("orders")}>
                    View All Orders
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
          
          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Orders</h1>
                <Button>
                  <Package className="mr-2 h-4 w-4" />
                  New Order
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Order ID</th>
                          <th className="text-left p-4">Service</th>
                          <th className="text-left p-4">Date</th>
                          <th className="text-left p-4">Price</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userData.orders.map(order => (
                          <tr key={order.id} className="border-b hover:bg-muted/50">
                            <td className="p-4 font-medium">{order.id}</td>
                            <td className="p-4">{order.service}</td>
                            <td className="p-4">{order.date}</td>
                            <td className="p-4">{order.price}</td>
                            <td className="p-4">
                              <Badge variant={order.status === "Completed" ? "outline" : "secondary"}>
                                {order.status}
                              </Badge>
                            </td>
                            <td className="p-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="ghost">
                                  <MessageSquare className="h-4 w-4" />
                                </Button>
                                {order.status === "Completed" && (
                                  <Button size="sm" variant="ghost">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Profile</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue={userData.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue={userData.email}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue="+255 678 469 749"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue="Dar es Salaam, Tanzania"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past orders and projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.orders.map(order => (
                      <div key={order.id} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">{order.service}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <Badge variant={order.status === "Completed" ? "outline" : "secondary"}>
                          {order.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "pricing" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Live Pricing Calculator</h1>
              <Card>
                <CardContent className="p-6">
                  <LivePricingCalculator />
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Notifications</h1>
                <Button variant="outline" size="sm">Mark all as read</Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {userData.notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`p-4 flex items-start space-x-4 ${!notification.read ? 'bg-primary/5' : ''}`}
                      >
                        <div className={`p-2 rounded-full ${!notification.read ? 'bg-primary/10' : 'bg-muted'}`}>
                          <Bell className={`h-4 w-4 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`${!notification.read ? 'font-medium' : ''}`}>{notification.message}</p>
                          <p className="text-sm text-muted-foreground">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Settings</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive email updates about your orders</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive text messages for order updates</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Password</label>
                    <input type="password" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">New Password</label>
                    <input type="password" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm New Password</label>
                    <input type="password" className="w-full p-2 border rounded-md" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}