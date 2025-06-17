import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogPost from "@/components/Blogpost";

export default async function WeeklyNerdPage() {
  const dir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(dir);

  const posts = files.map((filename) => {
    const fullPath = path.join(dir, filename);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { content, data } = matter(fileContent);

    return {
      content,
      ...data,
    };
  });

  return (
    <div>
      <h1>Weekly Nerds</h1>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          author={post.author}
          imageUrl={post.imageUrl}
          reflection={post.reflection}
          content={<MDXRemote source={post.content} />}
        />
      ))}
    </div>
  );
}
