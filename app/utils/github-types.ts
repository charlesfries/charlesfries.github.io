export interface GitHubRepository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  pushedAt: string;
  primaryLanguage: {
    name: string;
  };
}
