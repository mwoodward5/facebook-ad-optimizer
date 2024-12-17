import IMAGES from "../../../assets/images";

interface Props {
  step: number;
}

const Step: React.FC<Props> = ({ step }) => {
  const totalSteps = 4;

  return (
    <div className="flex flex-col items-start">
      <img
        src={IMAGES.logo} // Replace with your logo image path
        alt="Logo"
        className="h-16 mb-4 w-auto"
      />
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
    </div>
  );
};

export default Step;
