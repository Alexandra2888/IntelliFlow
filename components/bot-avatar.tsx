import React from "react";
import {Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage className="p-1 rounded-md" src="/logo.webp" />
    </Avatar>
  );
};

export default BotAvatar;
