import { CardBody, CardContainer, CardItem } from "./3d-card";
import { CalendarHeart, PawPrint } from "lucide-react";
export function Card({ post }: { post: any }) {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-pink-500/30 w-full sm:w-[80vw] h-auto rounded-xl p-6   ">
        <CardItem
          translateZ="50"
          className="font-bold font-headings text-neutral-900 flex gap-4"
        >
          <PawPrint className="text-pink-500/50 size-10" />
          <a href={`/posts/${post.slug}`} className="text-xl lg:text-3xl">
            {post.title}
          </a>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-base max-w-sm my-4  font-accent flex gap-4"
        >
          <CalendarHeart className="text-pink-500/50" />
          {new Date(post.$createdAt).toLocaleDateString()}
        </CardItem>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <CardItem translateZ="100" className="mt-4">
            <img
              loading="lazy"
              src={post.image}
              height="500"
              width="500"
              className="h-full w-60 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-base lg:text-lg max-w-5xl mx-auto text-balance mt-2 text-neutral-900 font-accent"
          >
            {post.excerpt}
          </CardItem>
        </div>
        <div className="flex justify-end items-center ">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl border border-pink-600/30 hover:bg-pink-500/30 font-bold"
          >
            <a href={`/posts/${post.slug}`}>Zobacz post</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
