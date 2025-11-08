import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notes } from '../notes/notes';

@Component({
  selector: 'app-sessions',
  imports: [CommonModule, Notes],
  templateUrl: './sessions.html',
  styleUrl: './sessions.css',
})
export class Sessions {
  sessionTabs = ['Upcoming', 'Completed', 'Notes'];
  selectedSessionTab = 'Upcoming';
  
  sessions = [
    {
      title: 'React Fundamentals Workshop',
      mentor: 'Sarah Chen',
      mentorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face',
      date: '2024-01-15',
      time: '2:00 PM - 4:00 PM',
      duration: '2 hours',
      level: 'Beginner',
      tags: ['React', 'JavaScript', 'Frontend'],
      status: 'upcoming',
      bookingId: 'BK001',
      joinLink: 'https://meet.google.com/abc-defg-hij'
    },
    {
      title: 'Machine Learning Bootcamp',
      mentor: 'David Rodriguez',
      mentorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face',
      date: '2024-01-18',
      time: '10:00 AM - 1:00 PM',
      duration: '3 hours',
      level: 'Advanced',
      tags: ['Python', 'ML', 'Data Science'],
      status: 'upcoming',
      bookingId: 'BK002',
      joinLink: 'https://meet.google.com/xyz-uvwx-yz'
    },
    {
      title: 'SQL for Data Analysis',
      mentor: 'Priya Sharma',
      mentorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face',
      date: '2024-01-12',
      time: '6:00 PM - 8:00 PM',
      duration: '2 hours',
      level: 'Intermediate',
      tags: ['SQL', 'Database', 'Analytics'],
      status: 'completed',
      bookingId: 'BK003',
      rating: 4.8
    },
    {
      title: 'Vue.js Deep Dive',
      mentor: 'Alex Johnson',
      mentorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
      date: '2024-01-20',
      time: '3:00 PM - 6:00 PM',
      duration: '3 hours',
      level: 'Intermediate',
      tags: ['Vue.js', 'JavaScript', 'SPA'],
      status: 'upcoming',
      bookingId: 'BK004',
      joinLink: 'https://meet.google.com/def-ghij-klm'
    }
  ];

  selectSessionTab(tab: string) {
    this.selectedSessionTab = tab;
  }

  get filteredSessions() {
    return this.sessions.filter(session => {
      if (this.selectedSessionTab === 'Upcoming') {
        return session.status === 'upcoming';
      } else {
        return session.status === 'completed';
      }
    });
  }

  getUpcomingCount() {
    return this.sessions.filter(session => session.status === 'upcoming').length;
  }
}
