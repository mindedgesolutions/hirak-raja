import { webIcons } from '@/constants';

const Header = () => {
  return (
    <div className="bg-primary font-inter">
      <div className="max-w-5xl flex justify-between items-center py-2">
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-card">
            <webIcons.location size={12} />
            <span className="text-xs tracking-wider">
              123, Lorem ipsum dolor sit amet
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-card">
            <webIcons.phone size={12} />
            <span className="text-xs tracking-wider">+91-1234567890</span>
          </div>
          <div className="flex items-center gap-1.5 text-card">
            <webIcons.email size={14} />
            <span className="text-xs tracking-widest">test@test.com</span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
export default Header;
