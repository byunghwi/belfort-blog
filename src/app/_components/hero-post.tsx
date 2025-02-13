import CoverImage from "./cover-image"
import Link from "next/link"
import DateFormatter from "./date-formatter"
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  content: string;
}

export async function HeroPost({title, coverImage, date, excerpt, slug, content}: Props) {
  content = await markdownToHtml(content || "");

  return (
    <section>
       <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-x-4 md:items-start md:mb-28">
        {/* 이미지 (왼쪽) */}
        <div className="mb-2 md:mb-0">
          <CoverImage title={title} src={coverImage} slug={slug} width={430} />
        </div>

        {/* 텍스트 내용 (오른쪽) */}
        <div>
          <h3 className="mb-2 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </section>
  )
}