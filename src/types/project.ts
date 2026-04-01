export interface Project {
    id: string;
    title: string;
    date: string;
    category: string[];
    job: string;
    application: string;
    pickColors?: string[];
    concept: string;
    description: string;
    github?: string;
    deploy?: string;
    link?: string;
    tags: string[];
    images?: string[];
    imageComments?: string;
}