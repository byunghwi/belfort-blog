import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
//import { Metadata} from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header"
import PostHeader from "@/app/_components/post-header";
import PostBody from "@/app/_components/post-body";

type Params = {
  params: Promise<{slug: string}>;
}
export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if(!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={content}/>
        </article>
      </Container>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post=>({
    slug: post.slug
  }))
}