import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { useOrderDesign } from '@/hooks/useOrderDesign';
import { 
  ShoppingCart, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar, 
  CheckCircle, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface OrderDesignDialogProps {
  designName: string;
  designCategory: string;
  children: React.ReactNode;
}

export const OrderDesignDialog = ({ designName, designCategory, children }: OrderDesignDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'details' | 'preferences' | 'review' | 'success'>('details');
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    special_requests: '',
    delivery_timeline: 'standard',
    budget_range: '',
    reference_links: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  const { submitOrder, loading } = useOrderDesign();

  const validateStep = (currentStep: string): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 'details') {
      if (!formData.customer_name.trim()) {
        newErrors.customer_name = 'Name is required';
      }
      
      if (!formData.customer_email.trim()) {
        newErrors.customer_email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.customer_email)) {
        newErrors.customer_email = 'Please enter a valid email';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 'details' && validateStep('details')) {
      setStep('preferences');
    } else if (step === 'preferences') {
      setStep('review');
    }
  };

  const prevStep = () => {
    if (step === 'preferences') {
      setStep('details');
    } else if (step === 'review') {
      setStep('preferences');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep('details')) {
      return;
    }

    const orderData = {
      design_name: designName,
      design_category: designCategory,
      ...formData,
    };

    const { error } = await submitOrder(orderData);
    
    if (!error) {
      setOrderSuccess(true);
      setStep('success');
      setTimeout(() => {
        setOpen(false);
        setOrderSuccess(false);
        setStep('details');
        setFormData({
          customer_name: '',
          customer_email: '',
          customer_phone: '',
          special_requests: '',
          delivery_timeline: 'standard',
          budget_range: '',
          reference_links: '',
        });
      }, 3000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const getDeliveryTimelineLabel = () => {
    switch (formData.delivery_timeline) {
      case 'urgent': return 'Urgent (1-2 days)';
      case 'express': return 'Express (3-5 days)';
      case 'standard': return 'Standard (1-2 weeks)';
      case 'relaxed': return 'Relaxed (2+ weeks)';
      default: return 'Standard (1-2 weeks)';
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'details' || step === 'preferences' || step === 'review' || step === 'success' ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</div>
      <div className={`h-1 w-12 ${step === 'preferences' || step === 'review' || step === 'success' ? 'bg-primary' : 'bg-gray-200'}`}></div>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'preferences' || step === 'review' || step === 'success' ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</div>
      <div className={`h-1 w-12 ${step === 'review' || step === 'success' ? 'bg-primary' : 'bg-gray-200'}`}></div>
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'review' || step === 'success' ? 'bg-primary text-white' : 'bg-gray-200'}`}>3</div>
    </div>
  );

  const renderDetailsStep = () => (
    <>
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Full Name *
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.customer_name}
          onChange={(e) => handleInputChange('customer_name', e.target.value)}
          className={errors.customer_name ? 'border-red-500' : ''}
        />
        {errors.customer_name && (
          <p className="text-red-500 text-xs mt-1">{errors.customer_name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.customer_email}
          onChange={(e) => handleInputChange('customer_email', e.target.value)}
          className={errors.customer_email ? 'border-red-500' : ''}
        />
        {errors.customer_email && (
          <p className="text-red-500 text-xs mt-1">{errors.customer_email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Phone Number (Optional)
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.customer_phone}
          onChange={(e) => handleInputChange('customer_phone', e.target.value)}
        />
      </div>
    </>
  );

  const renderPreferencesStep = () => (
    <>
      <div className="space-y-2">
        <Label htmlFor="timeline" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Delivery Timeline
        </Label>
        <Select 
          value={formData.delivery_timeline} 
          onValueChange={(value) => handleInputChange('delivery_timeline', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
            <SelectItem value="express">Express (3-5 days)</SelectItem>
            <SelectItem value="standard">Standard (1-2 weeks)</SelectItem>
            <SelectItem value="relaxed">Relaxed (2+ weeks)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget" className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Budget Range (Optional)
        </Label>
        <Input
          id="budget"
          type="text"
          placeholder="e.g. $500-$1000"
          value={formData.budget_range}
          onChange={(e) => handleInputChange('budget_range', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="references" className="flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          Reference Links (Optional)
        </Label>
        <Input
          id="references"
          type="text"
          placeholder="Links to designs you like"
          value={formData.reference_links}
          onChange={(e) => handleInputChange('reference_links', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="requests" className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Special Requests (Optional)
        </Label>
        <Textarea
          id="requests"
          placeholder="Any special requirements, customizations, or messages..."
          value={formData.special_requests}
          onChange={(e) => handleInputChange('special_requests', e.target.value)}
          rows={3}
        />
      </div>
    </>
  );

  const renderReviewStep = () => (
    <div className="space-y-4">
      <div className="bg-muted p-4 rounded-lg space-y-3">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Design</span>
          <span className="text-sm">{designName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Category</span>
          <span className="text-sm">{designCategory}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Name</span>
          <span className="text-sm">{formData.customer_name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium">Email</span>
          <span className="text-sm">{formData.customer_email}</span>
        </div>
        {formData.customer_phone && (
          <div className="flex justify-between">
            <span className="text-sm font-medium">Phone</span>
            <span className="text-sm">{formData.customer_phone}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-sm font-medium">Timeline</span>
          <span className="text-sm">{getDeliveryTimelineLabel()}</span>
        </div>
        {formData.budget_range && (
          <div className="flex justify-between">
            <span className="text-sm font-medium">Budget</span>
            <span className="text-sm">{formData.budget_range}</span>
          </div>
        )}
      </div>
      
      {formData.special_requests && (
        <div>
          <h4 className="text-sm font-medium mb-1">Special Requests:</h4>
          <p className="text-sm bg-muted p-3 rounded-lg">{formData.special_requests}</p>
        </div>
      )}
      
      {formData.reference_links && (
        <div>
          <h4 className="text-sm font-medium mb-1">References:</h4>
          <p className="text-sm bg-muted p-3 rounded-lg">{formData.reference_links}</p>
        </div>
      )}
      
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Please Note</AlertTitle>
        <AlertDescription>
          By submitting this order, you agree to be contacted regarding your design request.
        </AlertDescription>
      </Alert>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="text-center py-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Order Submitted Successfully!</h3>
      <p className="text-muted-foreground mb-4">
        Thank you for your order. We'll contact you shortly to discuss the details.
      </p>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 'details':
        return renderDetailsStep();
      case 'preferences':
        return renderPreferencesStep();
      case 'review':
        return renderReviewStep();
      case 'success':
        return renderSuccessStep();
      default:
        return null;
    }
  };

  const renderButtons = () => {
    if (step === 'success') return null;
    
    return (
      <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0 pt-4">
        {step !== 'details' && (
          <Button type="button" variant="outline" onClick={prevStep}>
            Back
          </Button>
        )}
        
        {step === 'details' && (
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        )}
        
        {step !== 'review' ? (
          <Button type="button" onClick={nextStep}>
            {step === 'details' ? 'Next: Preferences' : 'Next: Review'}
          </Button>
        ) : (
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Order"}
          </Button>
        )}
      </DialogFooter>
    );
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!loading) {
        setOpen(newOpen);
        if (!newOpen) {
          setStep('details');
          setErrors({});
        }
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            {step === 'success' ? 'Order Confirmed' : 'Order Design'}
          </DialogTitle>
          {step !== 'success' && (
            <DialogDescription>
              {step === 'review' 
                ? 'Review your order details before submitting'
                : `Order "${designName}" - ${designCategory}. ${step === 'details' ? 'Fill in your contact details.' : 'Tell us about your preferences.'}`
              }
            </DialogDescription>
          )}
        </DialogHeader>
        
        {step !== 'success' && renderStepIndicator()}
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {renderStepContent()}
          {renderButtons()}
        </form>
      </DialogContent>
    </Dialog>
  );
};