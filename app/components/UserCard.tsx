// UserCard.tsx
import React from "react";

type UserCardProps = {
  user: {
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
    location: { city: string; country: string };
  };
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{user.name.first} {user.name.last}</h2>
        <p className="text-sm text-gray-600">{user.location.city}, {user.location.country}</p>
        <p className="text-sm text-gray-500 mt-2">{user.email}</p>
      </div>
    </div>
  );
}

