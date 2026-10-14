import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        className="size-36 rounded-full object-cover ring-4 ring-white shadow-lg shadow-emerald-900/10 dark:ring-zinc-800"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="mt-1.5 text-[15px] text-zinc-500 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
