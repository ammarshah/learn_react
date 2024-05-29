import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (children.length <= maxChars) {
    return <>{children}</>;
  }

  if (isExpanded) {
    return (
      <>
        {children}
        <button onClick={handleExpandToggle}>Show less</button>
      </>
    );
  }

  return (
    <>
      {children.substring(0, maxChars)}...
      <button onClick={handleExpandToggle}>Show more</button>
    </>
  );
}

export default ExpandableText;
