import './home.css';
import PostItem from '../components/post/PostItem';
import { posts } from '../data/data';
const Home = () => {
  return (
    <div className='home'>
        <h1>Home</h1>
        {posts.map((post) => (
        <PostItem post={post}/>
        ))}
    </div>
  )
}

export default Home