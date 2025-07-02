import SocialNavbar from "@/components/SocialNavbar";
import SocialSidebar from "@/components/SocialSidebar";
import PostCard from "@/components/PostCard";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const samplePosts = [
  {
    author: "Анна Петрова",
    avatar: "/placeholder.svg",
    time: "2 часа назад",
    content:
      "Сегодня прекрасный день для новых свершений! 🚀 Работаю над новым проектом в React и TypeScript. Технологии развиваются так быстро!",
    image: "/placeholder.svg",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    author: "Максим Иванов",
    avatar: "/placeholder.svg",
    time: "4 часа назад",
    content:
      "Кто-нибудь знает хорошие ресурсы для изучения веб-разработки? Хочу углубиться в изучение фронтенда 💻",
    likes: 15,
    comments: 12,
    shares: 2,
  },
  {
    author: "Елена Смирнова",
    avatar: "/placeholder.svg",
    time: "6 часов назад",
    content:
      "Только что вернулась с конференции по дизайну! Столько вдохновения и новых идей. Поделюсь самыми интересными находками в следующих постах ✨",
    image: "/placeholder.svg",
    likes: 32,
    comments: 6,
    shares: 8,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-social-dark">
      <SocialNavbar />

      <div className="flex">
        <SocialSidebar />

        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-social-dark-card border-social-gray/20 mb-6">
              <CardContent className="p-4">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-social-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">ЮА</span>
                  </div>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Что у вас нового?"
                      className="bg-social-dark border-social-gray/30 text-white placeholder-social-gray resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-social-dark-hover rounded-full transition-colors">
                          <Icon
                            name="Image"
                            className="w-5 h-5 text-social-gray hover:text-white"
                          />
                        </button>
                        <button className="p-2 hover:bg-social-dark-hover rounded-full transition-colors">
                          <Icon
                            name="Video"
                            className="w-5 h-5 text-social-gray hover:text-white"
                          />
                        </button>
                        <button className="p-2 hover:bg-social-dark-hover rounded-full transition-colors">
                          <Icon
                            name="Music"
                            className="w-5 h-5 text-social-gray hover:text-white"
                          />
                        </button>
                      </div>
                      <Button className="bg-social-purple hover:bg-social-purple/80 text-white">
                        Опубликовать
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {samplePosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
