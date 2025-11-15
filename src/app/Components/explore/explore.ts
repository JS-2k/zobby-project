import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Roadmap } from "../roadmap/roadmap";
import { Mentors } from "../../Providers/mentors/mentors";
import { Sessions } from "../sessions/sessions";

@Component({
  selector: 'app-explore',
  imports: [CommonModule ],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {
  tabs = ['Roadmap', 'Mentors', 'Sessions'];
  selectedTab = 'Roadmap';
  
  categories = ['All', 'Tech', 'Business', 'Design', 'Marketing', 'Finance', 'Health', 'Education', 'Music', 'Art', 'Sports', 'Cooking', 'Travel', 'Photography'];
  selectedCategory = 'All';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  communities = [
    { title: 'Full Stack Development', thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=320&h=180&fit=crop', members: '1.2K', category: 'Tech', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', name: 'John Smith', price: '$29/mo', subtitle: 'Learn React, Node.js & MongoDB', rating: '4.8', reviews: '234', isSponsored: false },
    { title: 'UI/UX Design Mastery', thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=320&h=180&fit=crop', members: '856', category: 'Design', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face', name: 'Sarah Davis', price: '$39/mo', subtitle: 'Master Figma & Design Systems', rating: '4.9', reviews: '156', isSponsored: true },
    { title: 'Digital Marketing Pro', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=180&fit=crop', members: '2.1K', category: 'Marketing', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face', name: 'Mike Johnson', price: '$49/mo', subtitle: 'SEO, Social Media & Analytics', rating: '4.7', reviews: '389', isSponsored: false },
    { title: 'Data Science & AI', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=180&fit=crop', members: '967', category: 'Tech', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face', name: 'Anna Lee', price: '$59/mo', subtitle: 'Python, ML & Deep Learning', rating: '4.9', reviews: '278', isSponsored: false },
    { title: 'Startup Accelerator', thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=320&h=180&fit=crop', members: '543', category: 'Business', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face', name: 'David Wilson', price: '$99/mo', subtitle: 'From Idea to IPO', rating: '4.6', reviews: '89', isSponsored: false },
    { title: 'Content Creation Hub', thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=320&h=180&fit=crop', members: '1.8K', category: 'Marketing', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face', name: 'Emma Brown', price: '$25/mo', subtitle: 'Video, Writing & Social Media', rating: '4.8', reviews: '445', isSponsored: true },
    { title: 'Personal Finance Mastery', thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=320&h=180&fit=crop', members: '734', category: 'Finance', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face', name: 'Robert Taylor', price: '$35/mo', subtitle: 'Investing & Wealth Building', rating: '4.7', reviews: '167', isSponsored: false },
    { title: 'Fitness & Wellness', thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=180&fit=crop', members: '1.5K', category: 'Health', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face', name: 'Lisa Miller', price: '$19/mo', subtitle: 'Nutrition & Workout Plans', rating: '4.9', reviews: '523', isSponsored: false },
    { title: 'Music Production Studio', thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&h=180&fit=crop', members: '623', category: 'Music', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face', name: 'Chris Garcia', price: '$45/mo', subtitle: 'Beat Making & Audio Engineering', rating: '4.8', reviews: '198', isSponsored: false }
  ];

}