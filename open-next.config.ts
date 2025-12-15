import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Cloudflare-specific configuration
  // Uncomment to enable R2 cache (optional)
  // incrementalCache: r2IncrementalCache,
});
