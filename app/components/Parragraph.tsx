
export default function Paragraph({children}: {children: React.ReactNode}) {
  return (
    <p className=" text-base leading-[28px] text-gray-12 max-w-2xl">
        {children} 
    </p>
  );
} 