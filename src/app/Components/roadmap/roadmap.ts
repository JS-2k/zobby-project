import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  imports: [CommonModule],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap {
   filters = ['Best match', 'Trending', 'Newest', 'Most liked'];
    selectedFilter = 'Best match';
    selectFilter(filter: string) {
    this.selectedFilter = filter;
  }
roadmaps = [
    {
      title: 'Full Stack Developer Roadmap',
      difficulty: 'Intermediate → Advanced',
      author: '@RaviOps',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      likes: 2100,
      followers: 5400,
      updated: '1 day ago',
      mentorAvailable: true,
      verified: true,
      tags: ['Angular', 'Node.js', 'Docker']
    },
    {
      title: 'Data Analyst Roadmap',
      difficulty: 'Beginner Friendly',
      author: '@MeeraData',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
      likes: 950,
      followers: 2700,
      updated: '5 days ago',
      mentorAvailable: false,
      verified: false,
      tags: ['SQL', 'Excel', 'PowerBI']
    },
    {
      title: 'Machine Learning Engineer Path',
      difficulty: 'Advanced',
      author: '@PriyaAI',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      likes: 1530,
      followers: 4200,
      updated: '3 days ago',
      mentorAvailable: true,
      verified: true,
      tags: ['Python', 'TensorFlow', 'MLOps']
    },
    {
      title: 'Frontend Developer 2025',
      difficulty: 'Beginner → Advanced',
      author: '@AaravCodes',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      likes: 1230,
      followers: 3100,
      updated: '2 days ago',
      mentorAvailable: true,
      verified: false,
      tags: ['React', 'Tailwind', 'TypeScript']
    }
  ];
}
