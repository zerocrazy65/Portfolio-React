import {
   ProgressStepsWrapper,
   StepLabel,
   Step,
   VerticleLine,
   GraduateIcon,
   BookIcon,
   WorkIcon,
   CheckIcon,
   LayOut,
   StepLabelYear,
} from "../../styles/personalInfoStyles";
import { progresses } from "../../data/progress";

const ProgressSteps = () => {
   return (
      <ProgressStepsWrapper>
         {progresses.map((progress, index) => (
            <div key={index}>
               <Step>
                  {progress.icon === "GraduateIcon" && <GraduateIcon />}
                  {progress.icon === "BookIcon" && <BookIcon />}
                  {progress.icon === "WorkIcon" && <WorkIcon />}
                  {progress.icon === "CircleIcon" && <CheckIcon />}
                  <LayOut>
                     <StepLabel>{progress.header}</StepLabel>
                     {progress.year ? (
                        <StepLabelYear>{progress.year}</StepLabelYear>
                     ) : null}
                     <StepLabel>{progress.label}</StepLabel>
                  </LayOut>
               </Step>
               {index < progresses.length - 1 && <VerticleLine />}
            </div>
         ))}
      </ProgressStepsWrapper>
   );
};

export default ProgressSteps;
