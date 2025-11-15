import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SideNavbar } from '../../MenuBars/side-navbar/side-navbar';
import { NgModule } from '@angular/core';

interface FeedPost {
  id: string;
  community: string;
  board: string;
  authorName: string;
  username: string;
  authorAvatar: string;
  verified: boolean;
  timestamp: string;
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    alt?: string;
  };
  likes: number;
  comments: number;
}

interface Course {
  title: string;
  image: string;
  students: string;
  rating: number;
  price?: string;
  instructor?: string;
}

interface Community {
  name: string;
  members: string;
  category?: string;
  isPrivate?: boolean;
}

interface Creator {
  name: string;
  avatar: string;
  category: string;
  verified: boolean;
  followers?: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule , FormsModule  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

 postContent: string = '';
  
  feedPosts: FeedPost[] = [
    {
      id: '1',
      community: 'Tech Innovators',
      board: 'zobby',
      authorName: 'Foundational Men',
      username: '@foundationalmen',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=foundational',
      verified: true,
      timestamp: '17 minutes ago',
      content: `The true measure of a man is not how he stands in comfort, but how many times he gets back up after falling.<br><br>
        Adversity is the first path to truth; it reveals the strength you never knew you had.<br><br>
        It's not about avoiding the fall, it's about the resolve to rise every single time.<br><br>
        We gain strength, courage, and confidence by every experience in which we look fear in the face.<br><br>
        Tough times don't last, but tough men build something better from the ruins.`,
      media: {
        type: 'video',
        url: '',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        alt: 'Motivational video'
      },
      likes: 247,
      comments: 45
    },
    {
      id: '2',
      community: 'AI Enthusiasts',
      board: 'General',
      authorName: 'Sarah Johnson',
      username: '@sarahj',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      verified: false,
      timestamp: '2 hours ago',
      content: `Just launched my new course on digital marketing! 🚀<br><br>
        After 5 years in the industry, I'm finally sharing everything I've learned. Check it out and let me know what you think!`,
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        alt: 'Digital marketing course'
      },
      likes: 89,
      comments: 12
    },
    {
      id: '3',
      community: 'Mechanical Engineers',
      board: 'Announcements',
      authorName: 'Tech Hub',
      username: '@techhub',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
      verified: true,
      timestamp: '5 hours ago',
      content: `New feature alert! 🎉<br><br>
        We've just rolled out real-time collaboration tools. Now you can work with your team members simultaneously on projects.<br><br>
        Try it out and share your feedback!`,
      likes: 156,
      comments: 28
    }
  ];

  // Featured Courses Data
  featuredCourses: Course[] = [
    {
      title: 'Complete Web Development Bootcamp 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      students: '12.5k',
      rating: 4.8,
      price: '$89.99',
      instructor: 'John Smith'
    },
    {
      title: 'Advanced Digital Marketing Masterclass',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400',
      students: '8.3k',
      rating: 4.9,
      price: '$79.99',
      instructor: 'Sarah Williams'
    },
    {
      title: 'Python for Data Science & Machine Learning',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      students: '15.2k',
      rating: 4.7,
      price: '$94.99',
      instructor: 'Dr. Alex Chen'
    },
    {
      title: 'UI/UX Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
      students: '9.8k',
      rating: 4.6,
      price: '$69.99',
      instructor: 'Emily Rodriguez'
    },
    {
      title: 'Mobile App Development with React Native',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
      students: '11.4k',
      rating: 4.8,
      price: '$84.99',
      instructor: 'Mike Johnson'
    },
    {
      title: 'AWS Cloud Architecture Masterclass',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
      students: '7.2k',
      rating: 4.9,
      price: '$99.99',
      instructor: 'David Park'
    }
  ];

  // Trending Communities Data
  trendingCommunities: Community[] = [
    { 
      name: 'Web3 Builders', 
      members: '25.3k',
      category: 'Technology',
      isPrivate: false
    },
    { 
      name: 'AI & Machine Learning', 
      members: '18.7k',
      category: 'Technology',
      isPrivate: false
    },
    { 
      name: 'Startup Founders', 
      members: '32.1k',
      category: 'Business',
      isPrivate: false
    },
    { 
      name: 'Content Creators Hub', 
      members: '41.5k',
      category: 'Creative',
      isPrivate: false
    },
    { 
      name: 'Fitness & Wellness', 
      members: '28.9k',
      category: 'Health',
      isPrivate: false
    },
    { 
      name: 'Digital Nomads', 
      members: '19.3k',
      category: 'Lifestyle',
      isPrivate: false
    },
    { 
      name: 'E-commerce Entrepreneurs', 
      members: '22.8k',
      category: 'Business',
      isPrivate: false
    },
    { 
      name: 'Photography Masters', 
      members: '15.6k',
      category: 'Creative',
      isPrivate: false
    }
  ];

  // Suggested Creators Data
  suggestedCreators: Creator[] = [
    {
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      category: 'Tech Entrepreneur',
      verified: true,
      followers: '125k'
    },
    {
      name: 'Maria Garcia',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
      category: 'Marketing Expert',
      verified: true,
      followers: '89k'
    },
    {
      name: 'James Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
      category: 'Fitness Coach',
      verified: false,
      followers: '45k'
    },
    {
      name: 'Sophia Lee',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sophia',
      category: 'UX Designer',
      verified: true,
      followers: '67k'
    },
    {
      name: 'Ryan Thompson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ryan',
      category: 'Business Coach',
      verified: true,
      followers: '103k'
    },
    {
      name: 'Emma Davis',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
      category: 'Content Strategist',
      verified: false,
      followers: '38k'
    },
    {
      name: 'David Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
      category: 'Data Scientist',
      verified: true,
      followers: '72k'
    },
    {
      name: 'Lisa Anderson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
      category: 'Brand Consultant',
      verified: true,
      followers: '94k'
    }
  ];

  ngOnInit(): void {
    // Initialize component
    console.log('Home component loaded');
    console.log('Total courses:', this.featuredCourses.length);
    console.log('Total communities:', this.trendingCommunities.length);
    console.log('Total suggested creators:', this.suggestedCreators.length);
  }

  createPost(): void {
    if (!this.postContent.trim()) return;

    const newPost: FeedPost = {
      id: Date.now().toString(),
      community: 'zobby Discussion Board',
      board: 'zobby',
      authorName: 'You',
      username: '@yourname',
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
      verified: false,
      timestamp: 'Just now',
      content: this.postContent.replace(/\n/g, '<br>'),
      likes: 0,
      comments: 0
    };

    this.feedPosts.unshift(newPost);
    this.postContent = '';
    
    // Reset textarea height
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
    }
  }

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  getCommunityGradient(index: number): string {
    const gradients = [
      'from-blue-500 to-purple-600',
      'from-pink-500 to-red-600',
      'from-green-500 to-teal-600',
      'from-orange-500 to-yellow-600',
      'from-indigo-500 to-blue-600',
      'from-purple-500 to-pink-600',
      'from-cyan-500 to-blue-600',
      'from-emerald-500 to-green-600'
    ];
    return gradients[index % gradients.length];
  }

  // Optional: Methods for interacting with data
  likePost(postId: string): void {
    const post = this.feedPosts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
  }

  joinCommunity(communityName: string): void {
    console.log('Joining community:', communityName);
    // Add your join community logic here
  }

  followCreator(creatorName: string): void {
    console.log('Following creator:', creatorName);
    // Add your follow creator logic here
  }

  enrollCourse(courseTitle: string): void {
    console.log('Enrolling in course:', courseTitle);
    // Add your course enrollment logic here
  }

  loadMorePosts(): void {
    // Simulate loading more posts
    console.log('Loading more posts...');
    // Add your pagination logic here
  }
}
