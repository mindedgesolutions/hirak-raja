import { PageWrapper } from '@/components';
import { webIcons } from '@/constants';
import { ModeToggle } from '../theme-toggle';

const Header = () => {
  const icons = [
    { id: 'facebook', icon: webIcons.facebook },
    { id: 'instagram', icon: webIcons.instagram },
    { id: 'youtube', icon: webIcons.youtube },
  ];

  return (
    <div className="bg-primary font-inter">
      <PageWrapper className="flex justify-between items-center py-2">
        {/* left side */}
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-card">
            <webIcons.location size={14} />
            <span className="text-xs tracking-wider">
              123, Lorem ipsum dolor sit amet
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-card">
            <webIcons.phone size={14} />
            <span className="text-xs tracking-wider">+91-1234567890</span>
          </div>
          <div className="flex items-center gap-1.5 text-card">
            <webIcons.email size={14} />
            <span className="text-xs tracking-widest">test@test.com</span>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-row justify-center items-center gap-4">
          {icons.map((SocialIcon) => (
            <IconWrapper
              key={SocialIcon.id}
              icon={
                <SocialIcon.icon
                  className="text-card group-hover:text-card-foreground transition-colors duration-75"
                  size={14}
                />
              }
            />
          ))}
          <ModeToggle />
        </div>
      </PageWrapper>
    </div>
  );
};

export default Header;

const IconWrapper = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <span className="p-1 border border-card rounded-full cursor-pointer group hover:bg-card transition-colors duration-150">
      {icon}
    </span>
  );
};
