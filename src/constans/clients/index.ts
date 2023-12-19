import {
  ClientTypes,
  CompanyType,
  JobType,
  OptionType,
  filterFormType,
} from "@/types/clients";

export const ClientsImage: ClientTypes[] = [
  {
    url: "/images/jobox.png",
  },
  {
    url: "/images/dsign.png",
  },
  {
    url: "/images/wave.png",
  },
  {
    url: "/images/twins.png",
  },
  {
    url: "/images/bubles.png",
  },
];

export const LOCATION_OPTION: OptionType[] = [
  {
    id: "Indonesia",
    label: "Indonesia",
  },
  {
    id: "Malaysia",
    label: "Malaysia",
  },
  {
    id: "Singapure",
    label: "Singapure",
  },
  {
    id: "Thailand",
    label: "Thailand",
  },
  {
    id: "Vietnam",
    label: "Vietnam",
  },
];

export const ITEMS_CHECKBOX = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
];

export const CATEGORIES = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
];

export const FILTER_FORM_COMPANIES: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES,
  },
];

export const FILTER_FORM: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES,
  },
  {
    name: "type_employe",
    label: "Type of Employment",
    items: CATEGORIES,
  },
  {
    name: "salary",
    label: "Salary Range",
    items: CATEGORIES,
  },
];

export const DUMMY_DATA: JobType[] = [
  {
    applicants: 5,
    categories: ["Marketing", "Design"],
    desc: "lorem",
    image: "/images/company2.png",
    jobType: "Full-Time",
    location: "Paris, France",
    name: "Social media assistan",
    needs: 10,
    type: "Agency",
  },
  {
    applicants: 7,
    categories: ["Full-Stack Developer", "UI/UX"],
    desc: "lorem",
    image: "/images/company2.png",
    jobType: "Full-Time",
    location: "Jakarta, Indonesia",
    name: "Mediatama",
    needs: 5,
    type: "Agency",
  },
];

export const DUMMY_DATA_COMPANIES: CompanyType[] = [
  {
    image: "/images/company2.png",
    name: "Twitter",
    description: "lorem",
    categories: "Marketing",
    totalJobs: 10,
  },
  {
    image: "/images/company2.png",
    name: "Twitter",
    description: "lorem",
    categories: "Marketing",
    totalJobs: 10,
  },
  {
    image: "/images/company2.png",
    name: "Twitter",
    description: "lorem",
    categories: "Marketing",
    totalJobs: 10,
  },
];
