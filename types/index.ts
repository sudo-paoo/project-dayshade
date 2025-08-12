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

