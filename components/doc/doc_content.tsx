// deno-lint-ignore-file react-no-danger
import { Head } from "$fresh/runtime.ts";
import Hljs from "#/components/hljs.tsx";

/**
 * DocContentProps are the properties for the DocContent component.
 */
export interface DocContentProps {
  /**
   * title is the title of the documentation page.
   */
  title?: string;

  /**
   * body is the html content of the documentation page.
   */
  body: string;

  /**
   * toc is the table of contents of the documentation page.
   */
  toc?: string;
}

/**
 * DocContent is the content of a jsonx documentation page.
 */
export default function DocContent(props: DocContentProps) {
  const title = `jsonx | ${props.title ?? "Documentation"}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link rel="stylesheet" href="/md.css" />

        {/* Choose an ID: https://highlightjs.org/examples */}
        <Hljs id="github-dark-dimmed" />
        <script src="/copy.js" defer></script>
      </Head>

      <aside class="aside">
        <h2>On this page</h2>
        <div dangerouslySetInnerHTML={{ __html: props.toc ?? "" }}></div>
      </aside>

      <main class="main">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: props.body }}
        >
        </div>
      </main>
    </>
  );
}
