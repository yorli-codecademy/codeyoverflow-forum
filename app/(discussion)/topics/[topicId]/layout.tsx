import {ReactNode} from 'react'
import Button from '../../../../components/button/Button'

interface SubtopicLayoutProps {
  children: ReactNode
}

const SubtopicLayout = ({ children }: SubtopicLayoutProps) => {
  return (
    <div>
      {children}
      <footer>
        <Button href="/topics" label="Back To All Topics"></Button>
      </footer>
    </div>
  );
};

export default SubtopicLayout;
