import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const menuItems = [
  { icon: "Home", label: "Главная", active: true },
  { icon: "User", label: "Профиль" },
  { icon: "MessageCircle", label: "Сообщения" },
  { icon: "Users", label: "Друзья" },
  { icon: "Newspaper", label: "Новости" },
  { icon: "Music", label: "Музыка" },
  { icon: "Video", label: "Видео" },
  { icon: "Image", label: "Фото" },
  { icon: "Users2", label: "Сообщества" },
];

export default function SocialSidebar() {
  return (
    <aside className="w-64 bg-social-dark-card border-r border-social-gray/20 min-h-screen">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-social-purple text-white">
              ЮА
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-white font-medium">Юрий Антонов</h3>
            <p className="text-social-gray text-sm">онлайн</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-social-purple text-white"
                  : "text-social-gray hover:bg-social-dark-hover hover:text-white"
              }`}
            >
              <Icon name={item.icon as any} className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-social-gray/20">
          <div className="text-social-gray text-sm mb-2">Недавние группы</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 hover:bg-social-dark-hover rounded cursor-pointer">
              <div className="w-6 h-6 bg-social-purple rounded-full flex items-center justify-center">
                <span className="text-xs text-white">Р</span>
              </div>
              <span className="text-social-gray text-sm">React Developers</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-social-dark-hover rounded cursor-pointer">
              <div className="w-6 h-6 bg-social-purple rounded-full flex items-center justify-center">
                <span className="text-xs text-white">Д</span>
              </div>
              <span className="text-social-gray text-sm">Дизайнеры</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
