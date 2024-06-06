import Image from "next/image";
export default function RoundImg() {
  return (
    <div className="flex -space-x-4">
      {users.map((user) => (
        <Image
          key={user}
          className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
          src={user}
          alt="Apple Store Badge"
          width={40}
          height={40}
        />
      ))}
    </div>
  );
}

const users = [
  "/images/users/user1.jpg",
  "/images/users/user2.jpg",
  "/images/users/user3.jpg",
  "/images/users/user4.jpg",
  "/images/users/user5.jpg",
];
