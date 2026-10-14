export type Language = 'ar' | 'en';

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  priceEstimate: string;
  departures: string[];
  vehicleType: string;
  highlights: string[];
}

export interface VehicleItem {
  id: string;
  name: string;
  category: string;
  image: string;
  passengers: number;
  luggage: number;
  features: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  route: string;
  rating: number;
}

export interface BookingFormData {
  departureCity: string;
  destinationCity: string;
  travelDate: string;
  travelTime: string;
  serviceType: string;
  passengers: number;
  passengerName: string;
  passengerPhone: string;
  notes?: string;
  pickupLocation?: string;
}
