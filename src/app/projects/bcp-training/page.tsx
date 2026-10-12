import { CaseStudy, caseStudyMetadata } from '@/components/case-study';
import { projects } from '@/data/portfolio';
const project = projects[1];
export const metadata = caseStudyMetadata(project);
export default function TrainingPage() { return <CaseStudy project={project} />; }
