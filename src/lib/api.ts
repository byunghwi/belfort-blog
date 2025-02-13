import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/interfaces/post";

// mdx파일이 존재하는 디렉토리
const postsDir = path.join(process.cwd(), "_posts");

// _posts 디렉토리 내 모든 slug
export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

// 각 slug 마다의 mdx 파일 읽기
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

// 모든 slug들 날짜순 정렬로 가져오기
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // post 날짜 순 정렬
  return posts;
}

// 자기소개 post 가져오기
export function getIntroducePost(): Post {
  const post = getPostBySlug("introduce.mdx");
  return post;
}
