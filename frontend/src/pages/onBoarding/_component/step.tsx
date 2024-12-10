interface Props {
  step: number;
}

const Step: React.FC<Props> = ({ step }) => {
  const totalSteps = 4;

  return (
    <div className="flex items-center space-x-2 mt-2 w-full">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full bg-white ${
            index < step ? "" : " opacity-20"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Step;
