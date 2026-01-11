
import {
  Earth,
  Handshake,
  User,
  Building,
  ShieldCheck,
  Sprout,
  Users,
  Lightbulb,
  Building2,
  Copyright,
  Compass,
  TestTubeIcon,
  FileText,
  TrendingUp,
  Landmark,
  Briefcase,
} from "lucide-react";
import { BiCartDownload } from "react-icons/bi";
import { GiJusticeStar, GiScales } from "react-icons/gi";
import service_1 from "../assets/images/service-01.webp"
import service_2 from "../assets/images/service-02.webp"
import service_3 from "../assets/images/service-03.webp"
import service_4 from "../assets/images/service-04.webp"
import { FaTrademark } from "react-icons/fa";

export const BUSINESS_CARDS = [
  {
    id: 1,
    icon: Earth,
    heading: "Foreign Company Registration",
    paragraph:
      "Strategic setup for foreign subsidiaries to establish a seamless business presence in India.",
    iconColor: "#10b981", // Light Green (Emerald 500)
    strokeWidth: "2",
  },
  {
    id: "2",
    icon: Building,
    heading: "Private Limited Company",
    paragraph:
      "The most popular corporate legal entity in India, specifically optimized for high-growth Startups.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 3,
    icon: Handshake,
    heading: "Public Limited Registration",
    paragraph:
      "Designed for large-scale businesses seeking to raise equity capital from the public market.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 4,
    icon: Lightbulb, // Lucide version of BiBulb for consistency
    heading: "LLP Registration",
    paragraph:
      "A flexible approach for small businesses in the unorganized sector with multiple promoters.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 5,
    icon: ShieldCheck,
    heading: "Nidhi Company Registration",
    paragraph:
      "Encouraging thrift and savings by collecting deposits and lending solely to company members.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 6,
    icon: Sprout,
    heading: "Producer Company Registration",
    paragraph:
      "Ideal for agriculture-based companies with 10+ members focused on farmer welfare.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 7,
    icon: User,
    heading: "One Person Company (OPC)",
    paragraph:
      "The perfect entity for solo entrepreneurs wanting limited liability with full control.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 8,
    icon: Users,
    heading: "Partnership Registration",
    paragraph:
      "Ideal for like-minded partners seeking an entity with minimal procedural compliances.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 9,
    icon: GiJusticeStar,
    heading: "GST Registration",
    paragraph:
      "GST Registration is applicable on goods (Turnover: 40 lakhs) and services (Turnover: 20 lakh).",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 10,
    icon: Handshake,
    heading: "FSSAI Food License Registrations",
    paragraph:
      "Food License for food entrepreneurs as a basic, state or Central License.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 11,
    icon: BiCartDownload,
    heading: "Import Export Code (IEC)",
    paragraph:
      "Entrepreneurs/Entities planning to work overseas need to have Import Export Code..",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 12,
    icon: Building2,
    heading: "RERA Registrations",
    paragraph:
      "Commercial or residential land of over 500sq m or having more than 8 apartments.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
];


export const NGO_CARDS = [
  {
    id: 1,
    icon: service_1,
    heading: "Trust Registration",
    paragraph:
      "A Trust is an arrangement where owner or trust or of Trust transfers the property to a trustee.",
    iconColor: "#10b981",
  },
  {
    id: 2,
    icon: service_2,
    heading: "Society Registration",
    paragraph:
      "A group of people working together to promote charitable activities like sports, music, culture, religion, art, education, etc.",
    iconColor: "#10b981",
  },
  {
    id: 3,
    icon: service_3,
    heading: "Section-8 Company",
    paragraph:
      "Company formed with an object to promote commerce, art, science, sports, research, education, religion, protection of the environment, charity etc.",
    iconColor: "#10b981",
  },
  {
    id: 4,
    icon: service_4,
    heading: "FCRA Registration",
    paragraph:
      "Foreign contributions or income from nations outside of India are governed by the Foreign Contribution Regulation Act (FCRA). ",
    iconColor: "#10b981",
  },
];

export const TRADEMARK_REGISTRATION = [
  {
    id: 1,
    icon: FaTrademark,
    heaading: "Trademark Registration",
    paragraph:
      "Register your brand name/ logo and create your goodwill in the market.",
    iconColor: "#808080",
  },
  {
    id: 2,
    icon: Copyright,
    heaading: "Copyright Registration",
    paragraph:
      "Copyright is the legal right to ownership and enojyment entilted to creators.",
    iconColor: "#808080",
  },
  {
    id: 3,
    icon: Compass,
    heaading: "Design Registration",
    paragraph:
      "Protect and newly created shape, configuration, patterns and composition of lines or colours.",
    iconColor: "#808080",
  },
  {
    id: 4,
    icon: TestTubeIcon,
    heaading: "Patent Registration",
    paragraph:
      "Secure invention or the special right given to an inventor by a govt to manufacture, sell or use invention",
    iconColor: "#808080",
  },
];

export const AUDIT_TAX_CARDS = [
  {
    id: 1,
    icon: FileText, // Replace with actual icon
    heading: "ITR Filing",
    paragraph:
      "ITR is a form in which an Assessee files his information about Income and tax payable to the Income Tax Department.",
    iconColor: "#10b981", // Emerald 500
    strokeWidth: "2",
  },
  {
    id: 2,
    icon: Building2, // Replace with actual icon
    heading: "ROC Filing",
    paragraph:
      "Annual General Meeting of the company is conducted once a year and the due date for the first Annual General Meeting.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 3,
    icon: TrendingUp, // Replace with actual icon
    heading: "GST Return",
    paragraph:
      "All business & entrepreneurs who are registered under the GST mechanism have to mandatorily file the GST returns in the relevant GST form",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 4,
    icon: Handshake, // Replace with actual icon
    heading: "TDS Return",
    paragraph:
      "TDS return is a quarterly statement to be given to the IT department. It is compulsory for Deductor to submit a TDS return on time.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 5,
    icon: GiScales, // Replace with actual icon
    heading: "GST Audit",
    paragraph:
      "GST Audit refers to the examination of the returns, records and other important documents which a taxable individual maintains.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 6,
    icon: Landmark, // Replace with actual icon
    heading: "Bank Audit",
    paragraph:
      "They handle a huge amount of deposits and savings of the public, so they have to be closely monitored and reviewed.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 7,
    icon: Users, // Replace with actual icon
    heading: "NGO Audit",
    paragraph:
      "Non-profit making organization in which funds are raised from members, donors or contributors besides from receiving donations",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
  {
    id: 8,
    icon: Briefcase, // Replace with actual icon
    heading: "Tax Audit",
    paragraph:
      "There are various types of audits under different laws such as company audit, statutory audit, cost audit, stock audit, etc.",
    iconColor: "#10b981",
    strokeWidth: "2",
  },
];
