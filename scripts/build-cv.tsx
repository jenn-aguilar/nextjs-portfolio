import React from "react";
import fs from "node:fs";
import path from "node:path";
import { renderToStream } from "@react-pdf/renderer";
import { DesignedCV } from "../cv/designed";
import { AtsCV } from "../cv/ats";

const OUT_DIR = path.join(process.cwd(), "public");

async function writePdf(name: string, element: React.ReactElement) {
  const outPath = path.join(OUT_DIR, name);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stream = await renderToStream(element);
  await new Promise<void>((resolve, reject) => {
    const write = fs.createWriteStream(outPath);
    stream.pipe(write);
    stream.on("end", () => resolve());
    stream.on("error", reject);
    write.on("error", reject);
  });
  console.log(`Wrote ${outPath}`);
}

async function main() {
  await writePdf("cv.pdf", <DesignedCV />);
  await writePdf("cv-ats.pdf", <AtsCV />);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
