import React from 'react';
interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
      <div className="grid items-center">
        <h1
          className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg"
        >
          {title}
        </h1>
      </div>
    </>
  );
};
export default Title;