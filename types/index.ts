export interface ApiRequest {
	id?: number;
	name?: string;
	[key: string]: any;
}

// ABOUT PAGE TYPES
  export interface TeamMember {
	id: number;
	name: string;
	title: string;
	image: string;
	socials: {
	  github?: string;
	  linkedin?: string;
	  email?: string;
	};
  }
  
  export interface Technology {
	id: number;
	name: string;
	icon: string;
	alt: string;
  }
  
  export interface Stats {
	activeMembers: number;
	projectsCount: number;
	yearsOfExcellence: number;
  }
  
  export interface AboutUsData {
	stats: Stats;
	team: TeamMember[];
	technologies: Technology[];
  }

// PROJECT SHOWCASE TYPES
export interface MonthlyProject {
  id: string
  title: string
  name: string
  embed_link: string
  description: string
  credits: string
}

export interface FeaturedProject {
  id: string
  title: string
  name: string
  embed_link: string
  description: string
}

// API Response Types
export interface MonthlyProjectResponse {
  success: boolean
  data: MonthlyProject
  message?: string
}

export interface FeaturedProjectsResponse {
  success: boolean
  data: FeaturedProject[]
  message?: string
}