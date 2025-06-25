export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
    tags: string[];
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of IoT in Smart Cities',
      excerpt: 'Exploring how IoT technology is revolutionizing urban infrastructure...',
      author: 'Priya Sharma',
      date: '2024-01-15',
      category: 'IoT Trends',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      readTime: '5 min read',
      tags: ['Smart Cities', 'Urban Planning', 'IoT']
    },
    {
        id: 2,
        title: 'AWS & DevOps',
        excerpt: 'What We Offer: Cloud Infrastructure Design: Build secure and scalable AWS cloud solutions. CI/CD Pipelines: Automate code testing and deployment with tools like Jenkins, GitHub Actions, and AWS CodePipeline. Containerization & Orchestration: Docker + Kubernetes (EKS) setup for efficient microservice deployment. Monitoring & Logging: Set up CloudWatch, ELK, and Grafana for real-time monitoring and alerting. Infrastructure as Code (IaC): Using Terraform and AWS CloudFormation for repeatable infrastructure deployment. ✅ Business Benefits: Faster Time-to-Market, Improved System Reliability, Reduced Downtime, Optimized Cloud Costs. Purple Technologies is your trusted partner in automating, scaling, and transforming your cloud journey using AWS and DevOps best practices. Azure & DevOps Solutions at Purple Technologies: As organizations shift toward Microsoft-based ecosystems, Azure & DevOps has emerged as a go-to solution for cloud transformation. Purple Technologies offers end-to-end solutions to help you leverage the full power of Azure combined with modern DevOps workflows. Why Azure + DevOps? Azure integrates seamlessly with GitHub, Visual Studio, and Microsoft’s DevOps tools, enabling a smooth developer experience and enterprise-grade deployment pipelines. Our Services Include: Azure Infrastructure Setup: Secure, compliant, and scalable architecture in Azure. Azure DevOps Services: Repos, Boards, Pipelines, Test Plans, and Artifacts. CI/CD Implementation: End-to-end automation with Azure Pipelines. Security & Governance: Identity and Access Management (IAM), RBAC, and policy-based controls. Hybrid Cloud Solutions: Azure Arc and on-premises integrations. ✅ Business Benefits: Accelerated Software Delivery, Seamless Integration with Microsoft Tools, Unified DevOps Lifecycle Management, Enterprise Security Standards. With Purple Technologies, tap into the future of enterprise DevOps using the capabilities of Microsoft Azure. Why Purple Technologies? Whether you’re a startup or an enterprise, Purple Technologies offers tailored cloud + DevOps solutions to match your needs. With expert teams across AWS, Azure, DevOps, and security, we bring you: 24/7 Support, Certified Engineers, Real-world Implementation Experience, Proven ROI-driven Results.',
        image: 'https://kalyanithub.com/wp-content/uploads/2023/12/Devops-min.jpg',
        readTime: "",
        date: "",
        author: "",
        category: "",
        tags: ['AWS', 'DevOps', 'CI/CD', 'Terraform', 'CloudWatch', 'Kubernetes'], 
      },
     {
  id: 3,
  title: 'AI/ML ',
  excerpt: 'Explore how Purple Technologies leverages AI/ML to enable automation, prediction, and intelligent business transformation.',
  author: '',
  date: '',
  category: '',
  image: 'https://i.pinimg.com/736x/f7/8c/ef/f78cef0dd20b57db43cc6c93cc4e7303.jpg', // Replace with AI-related image if needed
  readTime: '',
  tags: ['AI', 'MachineLearning', 'MLOps', 'Python', 'NLP'],
}

    // Add more posts as needed
  ];