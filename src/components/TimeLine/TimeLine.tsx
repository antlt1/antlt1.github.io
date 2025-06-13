import React from 'react';

const timelineData = [
  {
    date: '20th May, 2010',
    title: 'Heading 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quis vero sapie eius quas ex et facere exercitationem est.'
  },
  {
    date: '20th May, 2010',
    title: 'Heading 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quis vero sapie eius quas ex et facere exercitationem est.'
  },
  {
    date: '20th May, 2010',
    title: 'Heading 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quis vero sapie eius quas ex et facere exercitationem est.'
  },
  {
    date: '20th May, 2010',
    title: 'Heading 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quis vero sapie eius quas ex et facere exercitationem est.'
  }
];

const TimeLine: React.FC = () => {
  return (
    <div className="py-12 flex flex-col items-center">
      <div className="relative w-full max-w-2xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-neutral-700 rounded-full -translate-x-1/2 z-0"></div>
        <ul className="space-y-12 z-10 relative">
          {timelineData.map((item, idx) => (
            <li key={idx} className="flex w-full">
              <div className={`flex flex-col items-end w-1/2 pr-6 ${idx % 2 === 0 ? '' : 'order-2 pl-6 pr-0 items-start'}`}> {/* Left or right */}
                <div className="relative">
                  <span className="absolute -left-8 top-2 w-4 h-4 bg-neutral-800 border-4 border-neutral-700 rounded-full z-10"></span>
                  <div style={{
                    background: '#23272f',
                    color: '#f3f4f6',
                    borderRadius: '1rem',
                    padding: '28px 40px',
                    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
                    minWidth: 270,
                    maxWidth: 340,
                    fontFamily: 'inherit',
                  }}>
                    <span style={{ color: '#a1a1aa', fontSize: 13, fontWeight: 500 }}>{item.date}</span>
                    <h3 style={{ fontSize: 20, fontWeight: 700, margin: '14px 0', color: '#fff' }}>{item.title}</h3>
                    <p style={{ color: '#d1d5db', fontSize: 15, margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimeLine;