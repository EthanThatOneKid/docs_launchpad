import { contents } from "#/lib/resources/docs.ts";
import { toPath } from "#/lib/to_path.ts";
import DocContent from "./doc_content.tsx";

export default function DocumentationPage(request: Request) {
  const content = contentOf(request);
  return (
    <DocContent
      title={content.title}
      body={content.body}
      toc={content.toc}
    />
  );
}

function contentOf(request: Request) {
  const url = new URL(request.url);
  const path = toPath(url.pathname).join("/");
  const content = contents.get(path);
  if (!content) {
    throw new Error(`Content not found: ${path}`);
  }

  return content;
}
