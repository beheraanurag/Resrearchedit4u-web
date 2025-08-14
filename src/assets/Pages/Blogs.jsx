import React from "react";
import "../style/style.css";
import blogImage from "../images/blog.webp"; // replace with your image path

const BlogPage = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <img src={blogImage} alt="Research Problem Statement" className="blog-image" />
        <h1>How to Write a Research Problem Statement (Easy Guide + Free Templates)</h1>
        <p className="blog-meta">
          📅 August 12, 2025 | ✍️ ResearchEdit4U Team
        </p>
      </header>

      <article className="blog-content">
        <p>
          A research problem statement is a short paragraph that explains what is wrong, for whom, and why it matters.
          You need it for a thesis, a grant, or a journal paper.
        </p>
        <p>
          Many students still search for “how to write a research problem” every day. Let’s make it simple.
        </p>

        <blockquote>
          <strong>Example:</strong> Internet speeds vary significantly throughout a university campus. Does that hurt student engagement in blended (online + offline) classes?
        </blockquote>

        <h2>Highlights</h2>
        <ul>
          <li>Turn a vague topic into a clear research problem statement (Topic ≠ Problem).</li>
          <li>Include the three essentials: Gap, Context & Stakeholders, and Significance.</li>
          <li>Measure what matters and conduct a quick feasibility check before making a commitment.</li>
          <li>Apply a short AI Risk checklist (Govern–Map–Measure–Manage) and grab the free templates.</li>
        </ul>

        <h2>1. Topic ≠ Problem</h2>
        <p>
          A topic is significant and vague: <em>"online learning in universities."</em>  
          A problem is sharp:  
          <strong>
            "No one has measured how uneven internet speed on campus affects student engagement, so admins cannot plan upgrades."
          </strong>
        </p>

        <h2>2. The 3 Things Every Research Problem Statement Needs</h2>
        <ol>
          <li>Gap or issue: What is missing?</li>
          <li>Context & stakeholders: Who is affected?</li>
          <li>Significance: Why is this important?</li>
        </ol>

        <h2>3. Steps 1 & 2: Show the Gap, Then Point to Who/Where/When</h2>
        <p>
          Step 1 – Show the gap: Don't guess. Check recent papers, policy notes, and reports.  
          Step 2 – Define who/where/when: Avoid "everyone" and "everywhere."
        </p>

        <h2>4. Steps 3 & 4: Make It Measurable + Check Feasibility</h2>
        <p>
          Swap fuzzy words ("impact", "improve") for measurable outcomes. Then check feasibility on data access, time, ethics, skills, and budget.
        </p>

        <h2>5. Steps 5 & 6: Write the Paragraph, Then Test It</h2>
        <pre>
          "The problem addressed in this study is [gap], because [evidence of consequence],
          affecting [stakeholders/context]. This gap persists because [brief cause],
          and addressing it will [intended outcome]."
        </pre>

        <h2>Bonus: Quick AI-Risk Checklist</h2>
        <ul>
          <li>Govern: Who handles ethics and data rules?</li>
          <li>Map: Are your measures fair?</li>
          <li>Measure: How will you test for bias?</li>
          <li>Manage: What will you do if harm appears?</li>
        </ul>

        <h2>Free Templates</h2>
        <p>
          Get your free “Research Problem Starter Pack”: Problem Statement Template, Feasibility Matrix, and AI checklist.
        </p>

        <div className="takeaway">
          <strong>Plain Takeaway:</strong> State your problem like this — what is missing, who it hurts, and why it matters. Make it measurable, feasible, fair, and ethical.
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
