"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = {
  label?: string;
} & (
  | { value: string; parts?: never; joiner?: never }
  /**
   * Anti-spam: pass parts + joiner instead of a single value so the assembled
   * string (e.g. an email address) never appears verbatim in the rendered
   * HTML or the RSC payload. It gets stitched together at click-time.
   */
  | { parts: readonly string[]; joiner: string; value?: never }
);

export function CopyButton({ label = "Copy", ...rest }: Props) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    const text =
      "value" in rest && rest.value !== undefined
        ? rest.value
        : rest.parts!.join(rest.joiner!);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <button type="button" onClick={onClick} className="btn-outline">
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : label}
    </button>
  );
}
