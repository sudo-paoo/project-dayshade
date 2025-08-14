export interface FeaturedProject {
  id: string
  title: string
  name: string
  image: string
  description: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "1",
    title: "Project 1",
    name: "Project One",
    image: "https://placehold.co/600x400",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    title: "Project 2",
    name: "Project 2",
    image: "https://placehold.co/600x400",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    title: "Project 3",
    name: "Project 3",
    image: "https://placehold.co/600x400",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]
