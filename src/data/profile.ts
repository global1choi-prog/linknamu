// 메인 페이지에 표시할 프로필과 링크 데이터
// 추후 MongoDB Atlas에서 불러오도록 교체 예정

export type LinkIcon = "github" | "instagram" | "blog" | "youtube";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon: LinkIcon;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김플로",
  bio: "세계 최강 바이브 코더",
  imageUrl: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com", icon: "github" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { id: "blog", title: "블로그", url: "https://blog.naver.com", icon: "blog" },
  ],
};
