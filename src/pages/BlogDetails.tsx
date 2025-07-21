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
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        {post.title}
      </h1>

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

      {/* Main Content - Glass Box */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-8 py-10 space-y-8 shadow-lg">
        {post.id === 2 && (
          <>
            <Section title="• What We Offer:" color="from-purple-300 to-indigo-400" />
            <p>✅ Cloud Infrastructure Design: Build secure and scalable AWS cloud solutions.</p>
            <p>✅ CI/CD Pipelines: Automate with Jenkins, GitHub Actions, AWS CodePipeline.</p>
            <p>✅ Containerization & Orchestration: Docker + Kubernetes (EKS) setup.</p>
            <p>✅ Monitoring & Logging: CloudWatch, ELK, and Grafana for alerts.</p>
            <p>✅ Infrastructure as Code (IaC): Terraform and AWS CloudFormation.</p>

            <Section title="• Business Benefits:" color="from-pink-400 to-purple-500" />
            <p>🚀 Faster Time-to-Market, ☁️ Improved System Reliability, 💸 Optimized Costs.</p>
            <p>Purple Technologies is your trusted partner in cloud automation and scaling.</p>

            <Section title="• Azure & DevOps Solutions at Purple Technologies:" color="from-blue-300 to-sky-400" />
            <p>Microsoft-based Azure & DevOps solutions for cloud transformation success...</p>
          </>
        )}

        {post.id === 3 && (
          <>
            <Section title="• What We Offer:" color="from-purple-300 to-indigo-400" />
            <p>🤖 Custom AI/ML Model Development: Predictive, classification, generative.</p>
            <p>📊 Data Engineering: Pipeline data from multiple sources for modeling.</p>
            <p>🚀 Model Deployment: Flask, FastAPI, TensorFlow Serving, AWS SageMaker.</p>
            <p>🧠 Computer Vision & NLP: OCR, facial recognition, sentiment, chatbots.</p>
            <p>🛠️ MLOps: MLflow, DVC, Kubeflow for automation and monitoring.</p>

            <Section title="• Business Benefits:" color="from-pink-400 to-purple-500" />
            <p>📈 Predictive Insights, 🤖 Smarter Automation, ⚡ Real-world Impact.</p>

            <Section title="• Use Cases:" color="from-green-300 to-emerald-400" />
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Customer Churn Prediction</li>
              <li>Demand Forecasting</li>
              <li>Fraud Detection</li>
              <li>Sentiment Analysis</li>
              <li>Recommendation Engines</li>
            </ul>

            <Section title="• Why Purple Technologies?" color="from-yellow-300 to-orange-400" />
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>✔️ Experienced AI/ML Engineers</li>
              <li>✔️ End-to-End Project Ownership</li>
              <li>✔️ Fast Prototyping to Deployment</li>
              <li>✔️ Domain-Specific Solutions</li>
            </ul>
          </>
        )}
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

// Reusable gradient section header
const Section = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => (
  <h2
    className={`text-2xl font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text mb-2`}
  >
    {title}
  </h2>
);

export default BlogDetails;
