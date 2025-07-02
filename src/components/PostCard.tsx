import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface PostCardProps {
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function PostCard({
  author,
  avatar,
  time,
  content,
  image,
  likes,
  comments,
  shares,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <Card className="bg-social-dark-card border-social-gray/20 mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-social-purple text-white">
              {author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-white font-medium">{author}</h4>
            <p className="text-social-gray text-sm">{time}</p>
          </div>
          <button className="ml-auto p-1 hover:bg-social-dark-hover rounded">
            <Icon name="MoreHorizontal" className="w-4 h-4 text-social-gray" />
          </button>
        </div>

        <div className="text-white mb-3 leading-relaxed">{content}</div>

        {image && (
          <div className="mb-3">
            <img
              src={image}
              alt="Post content"
              className="w-full rounded-lg max-h-96 object-cover"
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-social-gray/20">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              isLiked
                ? "text-red-500 bg-red-500/10"
                : "text-social-gray hover:bg-social-dark-hover hover:text-white"
            }`}
          >
            <Icon
              name="Heart"
              className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
            />
            <span className="text-sm">{likeCount}</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-social-gray hover:bg-social-dark-hover hover:text-white transition-colors">
            <Icon name="MessageCircle" className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </button>

          <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-social-gray hover:bg-social-dark-hover hover:text-white transition-colors">
            <Icon name="Share" className="w-4 h-4" />
            <span className="text-sm">{shares}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
