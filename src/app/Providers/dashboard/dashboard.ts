import { Component } from '@angular/core';
import { NgApexchartsModule, ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTooltip, ApexStroke, ApexYAxis, ApexGrid, ApexFill, ApexNonAxisChartSeries, ApexLegend, ApexPlotOptions } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  fill: ApexFill;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  labels: string[];
};

@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Filter properties
  selectedPeriod: string = 'month';
  selectedDate: string = new Date().toISOString().split('T')[0];
  selectedMetric: string = 'sessions';
  isLoading: boolean = true;

  ngOnInit() {
    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  // Earnings Chart Configuration
  earningsChart: any = {
    series: [{
      name: 'Earnings',
      data: [2400, 3200, 2800, 4100, 3600, 4800, 5200, 4900, 5600, 6200, 5800, 6800]
    }],
    chart: {
      type: 'area',
      height: 300,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      },
      background: 'transparent',
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true
      }
    },
    colors: ['#8B5CF6'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        colorStops: [{
          offset: 0,
          color: '#8B5CF6',
          opacity: 0.7
        }, {
          offset: 100,
          color: '#A78BFA',
          opacity: 0.3
        }]
      }
    },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: 'hsl(var(--bc) / 0.7)' } }
    },
    yaxis: { labels: { style: { colors: 'hsl(var(--bc) / 0.7)' } } },
    grid: { borderColor: 'hsl(var(--bc) / 0.1)' },
    tooltip: { theme: 'dark' }
  };

  // Sessions Chart Configuration
  sessionsChart: any = {
    series: [{
      name: 'Sessions',
      data: [45, 52, 38, 65, 49, 72, 68, 81, 76, 89, 94, 102]
    }],
    chart: {
      type: 'bar',
      height: 300,
      toolbar: { show: false },
      background: 'transparent'
    },
    colors: ['#A855F7'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '60%'
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: 'hsl(var(--bc) / 0.7)' } }
    },
    yaxis: { labels: { style: { colors: 'hsl(var(--bc) / 0.7)' } } },
    grid: { borderColor: 'hsl(var(--bc) / 0.1)' }
  };



  // Dashboard Stats
  stats = {
    totalEarnings: 68400,
    totalSessions: 847,
    activeUsers: 1234,
    completionRate: 87,
    overallRating: 4.3,
    monthlyGrowth: 12.5,
    avgSessionDuration: 45,
    followers: 2847,
    followerGrowth: 34,
    activeSubscriptions: 42,
    unreadMessages: 5
  };

  // Recent Activities
  recentActivities = [
    { type: 'session', user: 'John Doe', subject: 'Angular Development', time: '2 hours ago', amount: 120, avatar: 'https://i.pravatar.cc/40?img=1' },
    { type: 'course', user: 'Jane Smith', subject: 'React Fundamentals', time: '4 hours ago', amount: 89, avatar: 'https://i.pravatar.cc/40?img=2' },
    { type: 'workshop', user: 'Mike Johnson', subject: 'Node.js Workshop', time: '1 day ago', amount: 250, avatar: 'https://i.pravatar.cc/40?img=3' },
    { type: 'consultation', user: 'Sarah Wilson', subject: 'Career Guidance', time: '2 days ago', amount: 75, avatar: 'https://i.pravatar.cc/40?img=4' }
  ];

  // Top Performing Courses
  topCourses = [
    { name: 'Full Stack Development', users: 234, revenue: 18720, rating: 4.9, image: 'https://picsum.photos/48/48?random=1' },
    { name: 'Angular Mastery', users: 189, revenue: 15120, rating: 4.8, image: 'https://picsum.photos/48/48?random=2' },
    { name: 'React Advanced', users: 156, revenue: 12480, rating: 4.7, image: 'https://picsum.photos/48/48?random=3' },
    { name: 'Node.js Complete', users: 143, revenue: 11440, rating: 4.6, image: 'https://picsum.photos/48/48?random=4' }
  ];

  // Data sets for different periods
  private chartData = {
    week: {
      earnings: [800, 1200, 950, 1400, 1100, 1600, 1350],
      sessions: [12, 18, 15, 22, 19, 25, 21],
      courses: [8, 12, 10, 15, 13, 18, 16],
      roadmaps: [3, 5, 4, 7, 6, 9, 8],
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    month: {
      earnings: [2400, 3200, 2800, 4100, 3600, 4800, 5200, 4900, 5600, 6200, 5800, 6800],
      sessions: [45, 52, 38, 65, 49, 72, 68, 81, 76, 89, 94, 102],
      courses: [32, 38, 28, 48, 36, 54, 49, 62, 58, 67, 71, 78],
      roadmaps: [15, 18, 12, 25, 19, 28, 24, 31, 29, 35, 38, 42],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    quarter: {
      earnings: [9400, 12600, 15800, 18400],
      sessions: [135, 189, 245, 287],
      courses: [98, 142, 179, 209],
      roadmaps: [45, 72, 92, 114],
      categories: ['Q1', 'Q2', 'Q3', 'Q4']
    },
    year: {
      earnings: [45200, 52800, 61400, 68400, 75600],
      sessions: [456, 623, 789, 847, 934],
      courses: [328, 456, 578, 628, 712],
      roadmaps: [156, 234, 312, 378, 445],
      categories: ['2020', '2021', '2022', '2023', '2024']
    }
  };

  updateCharts() {
    const data = this.chartData[this.selectedPeriod as keyof typeof this.chartData];
    
    // Update earnings chart
    this.earningsChart = {
      ...this.earningsChart,
      series: [{
        name: 'Earnings',
        data: data.earnings
      }],
      chart: {
        ...this.earningsChart.chart,
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: true
        }
      },
      xaxis: {
        ...this.earningsChart.xaxis,
        categories: data.categories
      }
    };

    // Update sessions chart
    this.sessionsChart = {
      ...this.sessionsChart,
      series: [{
        name: 'Sessions',
        data: data.sessions
      }],
      xaxis: {
        ...this.sessionsChart.xaxis,
        categories: data.categories
      }
    };

    // Update stats based on period
    this.updateStats();
    
    // Update sessions chart with current metric
    this.updateSessionsChart();
  }

  private updateStats() {
    const periodMultipliers = {
      week: 0.25,
      month: 1,
      quarter: 3,
      year: 12
    };
    
    const multiplier = periodMultipliers[this.selectedPeriod as keyof typeof periodMultipliers];
    
    this.stats = {
      totalEarnings: Math.round(68400 * multiplier),
      totalSessions: Math.round(847 * multiplier),
      activeUsers: Math.round(1234 * multiplier),
      completionRate: 87,
      overallRating: 4.3,
      monthlyGrowth: 12.5,
      avgSessionDuration: 45,
      followers: Math.round(2847 * multiplier),
      followerGrowth: 34,
      activeSubscriptions: Math.round(42 * multiplier),
      unreadMessages: 5
    };
  }

  getChartTitle(type: string): string {
    const periodNames = {
      week: 'Weekly',
      month: 'Monthly', 
      quarter: 'Quarterly',
      year: 'Yearly'
    };
    
    const chartNames = {
      earnings: 'Earnings Trend',
      sessions: this.selectedMetric
    };
    
    return `${periodNames[this.selectedPeriod as keyof typeof periodNames]} ${chartNames[type as keyof typeof chartNames]}`;
  }

  updateSessionsChart() {
    const data = this.chartData[this.selectedPeriod as keyof typeof this.chartData];
    const metricData = data[this.selectedMetric as keyof typeof data] as number[];
    
    this.sessionsChart = {
      ...this.sessionsChart,
      series: [{
        name: this.selectedMetric.charAt(0).toUpperCase() + this.selectedMetric.slice(1),
        data: metricData
      }],
      xaxis: {
        ...this.sessionsChart.xaxis,
        categories: data.categories
      }
    };
  }

  // Upcoming Sessions
  upcomingSessions = [
    { time: '03:00 PM', type: '1:1 Career Mentoring', student: 'Priya Sharma' },
    { time: '05:30 PM', type: 'Portfolio Review Session', student: 'Arun Kumar' },
    { time: 'Tomorrow 6 PM', type: 'Angular Coaching (Batch)', student: '12 students' }
  ];

  // Booking Requests
  bookingRequests = [
    { student: 'Arun Kumar', time: '4 PM Today' },
    { student: 'Sneha T', time: 'Tomorrow 11AM' }
  ];

  // Recent Reviews
  recentReviews = [
    { student: 'Arun', rating: 5, comment: 'Very helpful session, learned a lot!', avatar: 'https://i.pravatar.cc/32?img=5' },
    { student: 'Sneha', rating: 4, comment: 'Good session, clear explanations', avatar: 'https://i.pravatar.cc/32?img=6' },
    { student: 'Rahul', rating: 5, comment: 'Excellent mentor, highly recommended', avatar: 'https://i.pravatar.cc/32?img=7' },
    { student: 'Priya', rating: 5, comment: 'Amazing guidance for career growth', avatar: 'https://i.pravatar.cc/32?img=8' }
  ];

  getStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating));
    }
    return stars;
  }
}
