import { CaseStudy, caseStudyMetadata } from '@/components/case-study';
import { projects } from '@/data/portfolio';
const project = projects[0];
export const metadata = caseStudyMetadata(project);
export default function WorkforcePage() { return <CaseStudy project={project} />; }
