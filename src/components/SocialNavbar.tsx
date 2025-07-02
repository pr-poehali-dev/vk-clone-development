import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function SocialNavbar() {
  return (
    <nav className="bg-social-dark-card border-b border-social-gray/20 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-social-purple">VK Clone</h1>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-social-gray"
            />
            <Input
              className="bg-social-dark border-social-gray/30 text-white placeholder-social-gray pl-10"
              placeholder="Поиск людей, сообществ, музыки..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-social-dark-hover rounded-full transition-colors">
            <Icon
              name="Bell"
              className="w-5 h-5 text-social-gray hover:text-white"
            />
          </button>
          <button className="p-2 hover:bg-social-dark-hover rounded-full transition-colors">
            <Icon
              name="MessageCircle"
              className="w-5 h-5 text-social-gray hover:text-white"
            />
          </button>
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-social-purple text-white text-sm">
              ЮА
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
