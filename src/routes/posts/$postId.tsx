import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { MdxContent } from "#/components/mdx";

export const Route = createFileRoute("/posts/$postId")({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p._meta.path === params.postId);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `yogyy/posts · ${loaderData?.title}`,
      },
      {
        name: "description",
        content: loaderData?.description,
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const post = Route.useLoaderData();
  return (
    <div className="mx-auto mt-6 max-w-400 md:px-6 lg:px-10">
      <MdxContent code={post.mdx} />
    </div>
  );
}
