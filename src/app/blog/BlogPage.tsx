import Section from '@/components/Section';
import posts from '@/json/posts.json';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  return (
    <Section id='blog-page' title='Mi Blog'>
      {/* <h2>Mi Blog</h2> */}
      <ul id='blog-posts-container'>
        {posts.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <li>
              <img src={post.img} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </Section>
  );
}
