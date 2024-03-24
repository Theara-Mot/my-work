import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

function DownloadButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      className='download-button'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Lorem {hovered && <ArrowRightCircle size={25} />}
    </Button>
  );
}

export default DownloadButton;
