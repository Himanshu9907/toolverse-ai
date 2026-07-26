"use client";

interface UserAvatarProps {
  name?: string | null;
  image?: string | null;
  size?: number;
}

export function UserAvatar({
  name,
  image,
  size = 40,
}: UserAvatarProps) {
  const initial =
    name?.charAt(0).toUpperCase() || "U";

  if (image) {
    return (
      <img
        src={image}
        alt={name || "User"}
        width={size}
        height={size}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 font-bold text-white"
    >
      {initial}
    </div>
  );
}