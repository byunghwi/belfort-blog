import { Post } from "@/interfaces/post";
import { PostPreview } from "@/app/_components/post-preview";

type Props = {
  posts: Post[]
}

const MoreStories = ({posts}: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(post=>(
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt} 
            className="more-post-image"
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories;
