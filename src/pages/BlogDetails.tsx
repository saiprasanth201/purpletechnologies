import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, Tag } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '', 10);
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="text-center mt-10 text-red-500">
        Blog post not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-white">
      {/* Image */}
      <div className="mb-10">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover rounded-xl"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

      {/* Meta Info */}
      <div className="flex items-center text-base text-white/80 mb-8 gap-4 flex-wrap">
        <div className="flex items-center gap-1">
          <User size={18} />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={18} />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Tag size={18} />
          <span>{post.category}</span>
        </div>
        <span>• {post.readTime}</span>
      </div>

      {/* Content */}
      <div className="space-y-6 text-xl leading-relaxed text-white">
        <div className="space-y-6 text-xl leading-relaxed text-white">
  {post.id === 2 && (
    <>
      <p className="text-2xl font-bold text-purple-300">• What We Offer:</p>
      <p>Cloud Infrastructure Design: Build secure and scalable AWS cloud solutions.</p>
      <p>CI/CD Pipelines: Automate code testing and deployment with tools like Jenkins, GitHub Actions, and AWS CodePipeline.</p>
      <p>Containerization & Orchestration: Docker + Kubernetes (EKS) setup for efficient microservice deployment.</p>
      <p>Monitoring & Logging: Set up CloudWatch, ELK, and Grafana for real-time monitoring and alerting.</p>
      <p>Infrastructure as Code (IaC): Using Terraform and AWS CloudFormation for repeatable infrastructure deployment.</p>

      <p className="text-2xl font-bold text-purple-300">• Business Benefits:</p>
      <p>Faster Time-to-Market, Improved System Reliability, Reduced Downtime, Optimized Cloud Costs.</p>
      <p>Purple Technologies is your trusted partner in automating, scaling, and transforming your cloud journey using AWS and DevOps best practices.</p>

      <p className="text-2xl font-bold text-purple-300">• Azure & DevOps Solutions at Purple Technologies:</p>
      <p>As organizations shift toward Microsoft-based ecosystems, Azure & DevOps has emerged as a go-to solution for cloud transformation...</p>
      
      {/* The rest of your AWS content */}
    </>
  )}

  {post.id === 3 && (
    <>
      <p className="text-2xl font-bold text-purple-300">• What We Offer:</p>
      <p>Custom AI/ML Model Development: Build predictive, classification, and generative models tailored to your business needs.</p>
      <p>Data Engineering & Preprocessing: Clean, transform, and pipeline data from multiple sources for accurate modeling.</p>
      <p>Model Deployment: Serve models at scale using tools like Flask, FastAPI, TensorFlow Serving, or AWS SageMaker.</p>
      <p>Computer Vision & NLP: OCR, facial recognition, sentiment analysis, and chatbots powered by the latest AI frameworks.</p>
      <p>MLOps & Model Monitoring: Track drift, retrain models, and automate deployments using MLflow, DVC, and Kubeflow.</p>

      <p className="text-2xl font-bold text-purple-300">• Business Benefits:</p>
      <p>Smarter Decision Making, Predictive Insights, Process Automation, and Competitive Edge through AI.</p>
      <p>Purple Technologies empowers businesses with end-to-end AI/ML solutions that deliver measurable impact and real-world results.</p>

      <p className="text-2xl font-bold text-purple-300">• Use Cases:</p>
      <p>• Customer Churn Prediction</p>
      <p>• Demand Forecasting</p>
      <p>• Fraud Detection</p>
      <p>• Sentiment Analysis</p>
      <p>• Recommendation Engines</p>

      <p className="text-2xl font-bold text-purple-300">• Why Purple Technologies?</p>
      <ul className="list-disc list-inside pl-5 space-y-1">
        <li>Experienced AI/ML Engineers</li>
        <li>End-to-End Project Ownership</li>
        <li>Fast Prototyping to Scalable Deployment</li>
        <li>Domain-Specific Customization</li>
      </ul>
    </>
  )}
</div>

      </div>

      {/* Tags */}
      <div className="mt-12">
        <h3 className="font-semibold mb-2 text-xl">Tags:</h3>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-10">
        <Link
          to="/blog"
          className="text-cyan-400 hover:underline font-medium text-lg"
        >
          ← Back to all blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;