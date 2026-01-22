import homeContent from "../../content/pages/home.json";

export type HomeContent = typeof homeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}
