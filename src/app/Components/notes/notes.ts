import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [CommonModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  notes = [
    {
      id: 1,
      title: 'React Hooks Best Practices',
      content: 'Key takeaways from Sarah\'s workshop:\n- Always use useCallback for event handlers\n- useMemo for expensive calculations\n- Custom hooks for reusable logic',
      sessionTitle: 'React Fundamentals Workshop',
      mentor: 'Sarah Chen',
      date: '2024-01-15',
      tags: ['React', 'Hooks', 'Performance'],
      lastModified: '2 hours ago'
    },
    {
      id: 2,
      title: 'ML Model Deployment Pipeline',
      content: 'Steps for production deployment:\n1. Model validation and testing\n2. Containerization with Docker\n3. CI/CD pipeline setup\n4. Monitoring and logging',
      sessionTitle: 'Machine Learning Bootcamp',
      mentor: 'David Rodriguez',
      date: '2024-01-18',
      tags: ['ML', 'Deployment', 'DevOps'],
      lastModified: '1 day ago'
    },
    {
      id: 3,
      title: 'SQL Query Optimization',
      content: 'Important optimization techniques:\n- Use indexes effectively\n- Avoid SELECT *\n- Use EXPLAIN to analyze query plans\n- Consider partitioning for large tables',
      sessionTitle: 'SQL for Data Analysis',
      mentor: 'Priya Sharma',
      date: '2024-01-12',
      tags: ['SQL', 'Performance', 'Database'],
      lastModified: '3 days ago'
    }
  ];
}
