export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  moveDate: string;
  moveFrom: string;
  moveTo: string;
  estimatedValue: number;
  status: "new" | "contacted" | "quoted" | "booked" | "lost" | "stale";
  source: string;
  assignedRep: string;
  bookingProbability: number;
  urgencyScore: number;
  createdAt: string;
  lastContact: string;
  notes: string;
  moveSize: string;
}

export interface Rep {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bookedRevenue: number;
  totalLeads: number;
  closedDeals: number;
  conversionRate: number;
  avgResponseTime: number;
}

export interface DashboardMetrics {
  bookedRevenue: number;
  recoverableRevenue: number;
  staleLeads: number;
  conversionRate: number;
  avgMoveValue: number;
  leadResponseTime: number;
  missedCalls: number;
  aiRecoveredRevenue: number;
  weeklyTrend: number[];
  revenueBySource: { name: string; value: number }[];
  dailyBookings: { date: string; booked: number; lost: number; recovered: number }[];
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  available: boolean;
  currentJob: string | null;
  truckAssigned: string;
  efficiency: number;
}

export interface Job {
  id: string;
  leadName: string;
  date: string;
  time: string;
  moveFrom: string;
  moveTo: string;
  crew: string[];
  truck: string;
  status: "scheduled" | "in-progress" | "completed" | "cancelled";
  estimatedHours: number;
}

export const leads: Lead[] = [
  {
    id: "L001",
    name: "Sarah Mitchell",
    phone: "(555) 234-5678",
    email: "sarah.m@email.com",
    moveDate: "2026-06-15",
    moveFrom: "123 Oak Street, Austin, TX",
    moveTo: "456 Pine Ave, Dallas, TX",
    estimatedValue: 4200,
    status: "new",
    source: "Google Ads",
    assignedRep: "Marcus Johnson",
    bookingProbability: 82,
    urgencyScore: 9,
    createdAt: "2026-05-14",
    lastContact: "2026-05-14",
    notes: "3-bedroom house, has a piano that needs special handling",
    moveSize: "3 Bedroom",
  },
  {
    id: "L002",
    name: "James Chen",
    phone: "(555) 345-6789",
    email: "jchen@email.com",
    moveDate: "2026-06-20",
    moveFrom: "789 Elm Dr, Houston, TX",
    moveTo: "321 Maple Ln, San Antonio, TX",
    estimatedValue: 3100,
    status: "quoted",
    source: "Yelp",
    assignedRep: "Aisha Williams",
    bookingProbability: 65,
    urgencyScore: 7,
    createdAt: "2026-05-10",
    lastContact: "2026-05-13",
    notes: "2-bedroom apartment, flexible on dates",
    moveSize: "2 Bedroom",
  },
  {
    id: "L003",
    name: "Maria Rodriguez",
    phone: "(555) 456-7890",
    email: "maria.r@email.com",
    moveDate: "2026-05-25",
    moveFrom: "555 River Rd, Fort Worth, TX",
    moveTo: "888 Lake Blvd, Plano, TX",
    estimatedValue: 5800,
    status: "stale",
    source: "Referral",
    assignedRep: "Marcus Johnson",
    bookingProbability: 45,
    urgencyScore: 10,
    createdAt: "2026-05-01",
    lastContact: "2026-05-05",
    notes: "4-bedroom house with garage, hasn't responded in 10 days",
    moveSize: "4 Bedroom",
  },
  {
    id: "L004",
    name: "David Thompson",
    phone: "(555) 567-8901",
    email: "dthompson@email.com",
    moveDate: "2026-07-01",
    moveFrom: "222 Hill St, Arlington, TX",
    moveTo: "333 Valley Dr, Irving, TX",
    estimatedValue: 2200,
    status: "booked",
    source: "Website",
    assignedRep: "Aisha Williams",
    bookingProbability: 98,
    urgencyScore: 5,
    createdAt: "2026-05-08",
    lastContact: "2026-05-14",
    notes: "Studio apartment, minimal furniture",
    moveSize: "Studio",
  },
  {
    id: "L005",
    name: "Lisa Park",
    phone: "(555) 678-9012",
    email: "lpark@email.com",
    moveDate: "2026-06-10",
    moveFrom: "444 Oak Lane, Frisco, TX",
    moveTo: "666 Cedar Ave, McKinney, TX",
    estimatedValue: 3800,
    status: "stale",
    source: "Google Ads",
    assignedRep: "Tyler Reed",
    bookingProbability: 38,
    urgencyScore: 8,
    createdAt: "2026-04-28",
    lastContact: "2026-05-03",
    notes: "3-bedroom, needs packing service, went silent after quote",
    moveSize: "3 Bedroom",
  },
  {
    id: "L006",
    name: "Robert Kim",
    phone: "(555) 789-0123",
    email: "rkim@email.com",
    moveDate: "2026-06-25",
    moveFrom: "111 Broad St, Denton, TX",
    moveTo: "999 Narrow Ln, Lewisville, TX",
    estimatedValue: 6500,
    status: "contacted",
    source: "HomeAdvisor",
    assignedRep: "Marcus Johnson",
    bookingProbability: 71,
    urgencyScore: 6,
    createdAt: "2026-05-12",
    lastContact: "2026-05-14",
    notes: "5-bedroom house, full pack & move, high value",
    moveSize: "5 Bedroom",
  },
  {
    id: "L007",
    name: "Emily Watson",
    phone: "(555) 890-1234",
    email: "ewatson@email.com",
    moveDate: "2026-06-05",
    moveFrom: "777 Main St, Garland, TX",
    moveTo: "555 Side St, Richardson, TX",
    estimatedValue: 1800,
    status: "lost",
    source: "Yelp",
    assignedRep: "Tyler Reed",
    bookingProbability: 12,
    urgencyScore: 3,
    createdAt: "2026-04-20",
    lastContact: "2026-04-25",
    notes: "Chose competitor, price was main factor",
    moveSize: "1 Bedroom",
  },
  {
    id: "L008",
    name: "Kevin Patel",
    phone: "(555) 901-2345",
    email: "kpatel@email.com",
    moveDate: "2026-06-18",
    moveFrom: "333 Park Ave, Mesquite, TX",
    moveTo: "444 Garden Rd, Carrollton, TX",
    estimatedValue: 4500,
    status: "stale",
    source: "Referral",
    assignedRep: "Aisha Williams",
    bookingProbability: 52,
    urgencyScore: 9,
    createdAt: "2026-05-02",
    lastContact: "2026-05-06",
    notes: "3-bedroom, wants storage included, no response to follow-ups",
    moveSize: "3 Bedroom",
  },
  {
    id: "L009",
    name: "Amanda Foster",
    phone: "(555) 012-3456",
    email: "afoster@email.com",
    moveDate: "2026-07-10",
    moveFrom: "888 Sunset Blvd, Plano, TX",
    moveTo: "222 Sunrise Dr, Allen, TX",
    estimatedValue: 3400,
    status: "new",
    source: "Google Ads",
    assignedRep: "Tyler Reed",
    bookingProbability: 76,
    urgencyScore: 4,
    createdAt: "2026-05-15",
    lastContact: "2026-05-15",
    notes: "2-bedroom house, has antique furniture",
    moveSize: "2 Bedroom",
  },
  {
    id: "L010",
    name: "Chris Martinez",
    phone: "(555) 123-4567",
    email: "cmartinez@email.com",
    moveDate: "2026-06-28",
    moveFrom: "100 Center St, Grand Prairie, TX",
    moveTo: "200 Edge Rd, Mansfield, TX",
    estimatedValue: 7200,
    status: "contacted",
    source: "Website",
    assignedRep: "Marcus Johnson",
    bookingProbability: 88,
    urgencyScore: 7,
    createdAt: "2026-05-11",
    lastContact: "2026-05-14",
    notes: "Commercial office move, 4000 sqft, needs weekend availability",
    moveSize: "Commercial",
  },
];

export const reps: Rep[] = [
  {
    id: "R001",
    name: "Marcus Johnson",
    avatar: "MJ",
    role: "Senior Sales Rep",
    bookedRevenue: 142800,
    totalLeads: 48,
    closedDeals: 22,
    conversionRate: 45.8,
    avgResponseTime: 4.2,
  },
  {
    id: "R002",
    name: "Aisha Williams",
    avatar: "AW",
    role: "Sales Rep",
    bookedRevenue: 118500,
    totalLeads: 42,
    closedDeals: 18,
    conversionRate: 42.9,
    avgResponseTime: 6.1,
  },
  {
    id: "R003",
    name: "Tyler Reed",
    avatar: "TR",
    role: "Sales Rep",
    bookedRevenue: 95200,
    totalLeads: 38,
    closedDeals: 14,
    conversionRate: 36.8,
    avgResponseTime: 8.3,
  },
  {
    id: "R004",
    name: "Jessica Park",
    avatar: "JP",
    role: "Junior Sales Rep",
    bookedRevenue: 67400,
    totalLeads: 30,
    closedDeals: 10,
    conversionRate: 33.3,
    avgResponseTime: 11.5,
  },
];

export const dashboardMetrics: DashboardMetrics = {
  bookedRevenue: 423900,
  recoverableRevenue: 18400,
  staleLeads: 32,
  conversionRate: 41.2,
  avgMoveValue: 3840,
  leadResponseTime: 7.5,
  missedCalls: 8,
  aiRecoveredRevenue: 52300,
  weeklyTrend: [38200, 41500, 35800, 44200, 39600, 47100, 42390],
  revenueBySource: [
    { name: "Google Ads", value: 168400 },
    { name: "Referral", value: 112300 },
    { name: "Website", value: 78200 },
    { name: "Yelp", value: 42100 },
    { name: "HomeAdvisor", value: 22900 },
  ],
  dailyBookings: [
    { date: "Mon", booked: 6, lost: 2, recovered: 1 },
    { date: "Tue", booked: 8, lost: 1, recovered: 2 },
    { date: "Wed", booked: 5, lost: 3, recovered: 1 },
    { date: "Thu", booked: 9, lost: 1, recovered: 3 },
    { date: "Fri", booked: 7, lost: 2, recovered: 2 },
    { date: "Sat", booked: 4, lost: 1, recovered: 1 },
    { date: "Sun", booked: 3, lost: 0, recovered: 0 },
  ],
};

export const crewMembers: CrewMember[] = [
  { id: "C001", name: "Tony Ramirez", role: "Lead Mover", available: true, currentJob: null, truckAssigned: "Truck A", efficiency: 94 },
  { id: "C002", name: "Derek Brown", role: "Driver", available: false, currentJob: "J003", truckAssigned: "Truck A", efficiency: 88 },
  { id: "C003", name: "Sam Wilson", role: "Mover", available: true, currentJob: null, truckAssigned: "Truck B", efficiency: 91 },
  { id: "C004", name: "Jake Miller", role: "Lead Mover", available: true, currentJob: null, truckAssigned: "Truck B", efficiency: 96 },
  { id: "C005", name: "Luis Garcia", role: "Mover", available: false, currentJob: "J003", truckAssigned: "Truck C", efficiency: 85 },
  { id: "C006", name: "Andre Davis", role: "Driver", available: true, currentJob: null, truckAssigned: "Truck C", efficiency: 92 },
];

export const jobs: Job[] = [
  { id: "J001", leadName: "David Thompson", date: "2026-07-01", time: "08:00 AM", moveFrom: "222 Hill St, Arlington", moveTo: "333 Valley Dr, Irving", crew: ["Tony Ramirez", "Sam Wilson"], truck: "Truck A", status: "scheduled", estimatedHours: 4 },
  { id: "J002", leadName: "Amanda Foster", date: "2026-07-10", time: "09:00 AM", moveFrom: "888 Sunset Blvd, Plano", moveTo: "222 Sunrise Dr, Allen", crew: ["Jake Miller", "Andre Davis"], truck: "Truck B", status: "scheduled", estimatedHours: 5 },
  { id: "J003", leadName: "Chris Martinez", date: "2026-05-15", time: "07:00 AM", moveFrom: "100 Center St, Grand Prairie", moveTo: "200 Edge Rd, Mansfield", crew: ["Derek Brown", "Luis Garcia"], truck: "Truck C", status: "in-progress", estimatedHours: 8 },
];

export const aiRecommendations = [
  {
    id: 1,
    type: "recovery" as const,
    message: "32 stale leads can potentially recover $18,400",
    priority: "high" as const,
    action: "Start AI Recovery Campaign",
  },
  {
    id: 2,
    type: "alert" as const,
    message: "Lead response time increased 14 minutes this week",
    priority: "medium" as const,
    action: "Review Response Process",
  },
  {
    id: 3,
    type: "prediction" as const,
    message: "AI predicts revenue slowdown next Tuesday — consider promotions",
    priority: "medium" as const,
    action: "Create Promotion",
  },
  {
    id: 4,
    type: "insight" as const,
    message: "Google Ads leads convert 23% higher than Yelp leads",
    priority: "low" as const,
    action: "Adjust Ad Spend",
  },
  {
    id: 5,
    type: "recovery" as const,
    message: "Kevin Patel ($4,500 move) hasn't responded in 9 days — AI follow-up recommended",
    priority: "high" as const,
    action: "Send AI Follow-Up",
  },
];

export const callLog = [
  { id: 1, caller: "New Lead", phone: "(555) 111-2222", time: "2 min ago", duration: "3:42", status: "answered" as const, aiHandled: true, outcome: "Estimate booked" },
  { id: 2, caller: "Sarah Mitchell", phone: "(555) 234-5678", time: "15 min ago", duration: "5:18", status: "answered" as const, aiHandled: true, outcome: "Info collected" },
  { id: 3, caller: "Unknown", phone: "(555) 333-4444", time: "32 min ago", duration: "0:00", status: "missed" as const, aiHandled: false, outcome: "Callback scheduled" },
  { id: 4, caller: "Robert Kim", phone: "(555) 789-0123", time: "1 hour ago", duration: "4:55", status: "answered" as const, aiHandled: true, outcome: "Quote requested" },
  { id: 5, caller: "New Lead", phone: "(555) 555-6666", time: "2 hours ago", duration: "2:30", status: "answered" as const, aiHandled: true, outcome: "Qualified — commercial move" },
];
