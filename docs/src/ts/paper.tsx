import { type Paper as PaperType } from './types/paper';

export default function Paper({ paper }: { paper: PaperType }) {
  return (
    <div>
      <h3>{paper.title}</h3>
      {paper.authors?.length > 0
        ? <p><strong>Authors:</strong> {paper.authors.join(', ')}</p>
        : null}
      {paper.doi
        ? <p><strong>DOI:</strong> <a href={paper.doi} target='_blank' rel='noopener noreferrer'>{paper.doi}</a></p>
        : null}
    </div>
  );
}