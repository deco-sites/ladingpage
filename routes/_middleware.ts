import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 410,
  site: "ladingpage",
  domains: ["ladingpage.deco.site"],
});