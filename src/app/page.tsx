import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-md">
        <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

        <LinkList links={profile.links} />

        <footer className="mt-12 text-center text-xs text-zinc-400 dark:text-zinc-500">
          🌳 링크나무
        </footer>
      </div>
    </main>
  );
}
