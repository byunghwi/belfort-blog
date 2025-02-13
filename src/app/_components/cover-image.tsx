import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  width?: number;
  height?: number;
  className?: string;
};

const CoverImage = ({ title, src, slug, width, height, className }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", className, {
        "hover:shadow-2xl transition-shadow duration-200": slug,
      })}
      width={width || 1300}
      height={height || 630}
      layout="fixed"
    ></Image>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
