import { Component } from '@angular/core';

@Component({
  selector: 'app-mentors',
  imports: [],
  templateUrl: './mentors.html',
  styleUrl: './mentors.css',
})
export class Mentors {
  mentors = [
    {
      name: 'Sarah Chen',
      title: 'Senior Full Stack Developer',
      company: 'Google',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      rating: 4.9,
      sessions: 150,
      price: 80,
      skills: ['React', 'Node.js', 'AWS'],
      verified: true
    },
    {
      name: 'David Rodriguez',
      title: 'ML Engineer',
      company: 'Microsoft',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      rating: 4.8,
      sessions: 89,
      price: 95,
      skills: ['Python', 'TensorFlow', 'MLOps'],
      verified: true
    },
    {
      name: 'Priya Sharma',
      title: 'Data Scientist',
      company: 'Netflix',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      rating: 4.7,
      sessions: 120,
      price: 75,
      skills: ['SQL', 'Python', 'Tableau'],
      verified: false
    },
    {
      name: 'Alex Johnson',
      title: 'Frontend Architect',
      company: 'Airbnb',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      rating: 4.9,
      sessions: 200,
      price: 90,
      skills: ['Vue.js', 'TypeScript', 'Design Systems'],
      verified: true
    }
  ];
}
