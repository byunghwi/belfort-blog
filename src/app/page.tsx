import Container from "@/app/_components/container"
import { Intro } from "@/app/_components/intro"
import { HeroPost } from "./_components/hero-post";
import MoreStories from "@/app/_components/more-stories";
import { getAllPosts, getIntroducePost } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = getIntroducePost();
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost 
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          content={heroPost.content} 
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
      </Container>
    </main>
  );
}
