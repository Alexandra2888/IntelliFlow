import { useUser } from "@clerk/nextjs"; 
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = () => {
  const { user } = useUser(); 

  if (!user) {
    return null; 
  }

  const { imageUrl, firstName, lastName } = user;

  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src={imageUrl}/>
      <AvatarFallback>
        {firstName?.charAt(0)}
        {lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
