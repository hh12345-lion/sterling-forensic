import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const cacheDir = join(process.cwd(), ".next");

if (!existsSync(cacheDir)) {
  process.exit(0);
}

try {
  rmSync(cacheDir, {
    recursive: true,
    force: true,
    maxRetries: 5,
    retryDelay: 200,
  });
  console.log("Removed .next cache");
} catch (error) {
  console.error(
    "Could not remove .next cache. Stop all running `next dev` processes, then retry `npm run dev:clean`."
  );
  throw error;
}
