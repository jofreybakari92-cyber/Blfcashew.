import { useEffect, useState } from "react";
import { ImageIcon, Sparkles, Undo2 } from "lucide-react";
import { useA11y } from "../lib/a11y";

interface ImageEntry {
  src: string;
  alt: string;
  auto: string;
}

function describe(src: string) {
  const file = src.split("/").pop()?.split(/[?#]/)[0] ?? "image";
  return file
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

function autoAltFor(src: string, current: string) {
  const existing = current.trim();
  if (existing) return existing;
  const described = describe(src);
  return described && !/^(img|image|dsc|screenshot|photo)\d*$/i.test(described)
    ? `Photo: ${described}`
    : "Decorative image";
}

export function AltTextManager() {
  const { settings, update } = useA11y();
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [draft, setDraft] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!open) return;
    const entries = Array.from(document.querySelectorAll("img"))
      .map((img) => ({
        src: img.getAttribute("src") ?? "",
        alt: img.getAttribute("alt") ?? "",
        auto: img.getAttribute("data-alt") ?? autoAltFor(img.getAttribute("src") ?? "", ""),
      }))
      .filter((entry) => entry.src.length > 0);
    const seen = new Set<string>();
    setImages(entries.filter((entry) => (seen.has(entry.src) ? false : seen.add(entry.src))));
    setDraft({});
  }, [open]);

  const commit = (src: string, value: string) => {
    update({ altOverrides: { ...settings.altOverrides, [src]: value } });
  };

  const reset = (src: string) => {
    const next = { ...settings.altOverrides };
    delete next[src];
    update({ altOverrides: next });
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:border-copper/50"
      >
        <ImageIcon aria-hidden="true" className="h-4 w-4" />
        Review image alt text
      </button>
    );
  }

  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card/60 p-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          {images.length} image{images.length === 1 ? "" : "s"} on this page
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-xs font-semibold text-copper hover:underline"
        >
          Close
        </button>
      </div>

      <ul className="max-h-64 space-y-2 overflow-y-auto pr-1">
        {images.map((entry) => {
          const value = draft[entry.src] ?? settings.altOverrides[entry.src] ?? entry.alt;
          return (
            <li
              key={entry.src}
              className="space-y-1.5 rounded-xl border border-border bg-background p-2.5"
            >
              <span className="block truncate text-[11px] text-muted-foreground" title={entry.src}>
                {entry.src}
              </span>
              <label
                className="block text-xs font-medium text-foreground/80"
                htmlFor={`alt-${entry.src}`}
              >
                Alternative text
              </label>
              <div className="flex gap-2">
                <input
                  id={`alt-${entry.src}`}
                  value={value}
                  onChange={(event) =>
                    setDraft((prev) => ({ ...prev, [entry.src]: event.target.value }))
                  }
                  onBlur={() => commit(entry.src, value)}
                  className="min-w-0 flex-1 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs focus-visible:outline-none"
                />
                <button
                  type="button"
                  aria-label={`Auto generate alt text for ${entry.src}`}
                  onClick={() => {
                    const generated = autoAltFor(entry.src, entry.alt);
                    setDraft((prev) => ({ ...prev, [entry.src]: generated }));
                    commit(entry.src, generated);
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border transition-all hover:border-copper/60 hover:text-copper"
                >
                  <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label={`Reset alt text for ${entry.src}`}
                  onClick={() => reset(entry.src)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border transition-all hover:border-destructive/60 hover:text-destructive"
                >
                  <Undo2 aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
