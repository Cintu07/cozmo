import { ChatDemo, type ChatMessage } from "./ChatDemo";

/**
 * Live conversation framed on the lifesaver scenery. The desert image is the
 * section background; a dark panel sits on top (container width) so the scenery
 * shows as a frame around it. The chat holds a fixed height so messages
 * animating in never resize the panel or move the page.
 */
export function ChatShowcase({
  title,
  body,
  script,
  label,
}: {
  title: string;
  body: string;
  script?: ChatMessage[];
  label?: string;
}) {
  return (
    <section
      aria-label={title}
      className="bg-cover bg-center py-12 sm:py-20"
      style={{ backgroundImage: "url(/assets/lifesaver.png)" }}
    >
      <div className="container-content">
        <div className="rounded-3xl bg-[#0f0f0f] p-8 shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <h2 className="text-h2 [text-wrap:balance] text-cream_text-primary">
                {title}
              </h2>
              <p className="mt-6 text-body-lg text-cream_text-body">{body}</p>
            </div>
            <ChatDemo script={script} label={label} />
          </div>
        </div>
      </div>
    </section>
  );
}
