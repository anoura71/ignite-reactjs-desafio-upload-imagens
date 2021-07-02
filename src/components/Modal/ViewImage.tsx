import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Link,
} from '@chakra-ui/react';
import { useScreen } from '../../hooks/useScreen';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // Responsiveness
  useScreen();

  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        width="auto"
        height="auto"
        maxWidth={['270px', '360px', '630px', '900px', '900px']}
        maxHeight={['180px', '240px', '420px', '600px', '600px']}
        marginX="auto"
        marginY="2.5rem"
        backgroundColor="transparent"
      >
        <ModalCloseButton outline="0" outlineColor="transparent" />

        <ModalBody padding="0">
          <Image
            src={imgUrl}
            maxWidth={['270px', '360px', '630px', '900px', '900px']}
            maxHeight={['180px', '240px', '420px', '600px', '600px']}
          />
        </ModalBody>

        <ModalFooter backgroundColor="black">
          <Link
            fontSize="0.875rem"
            marginLeft="10px"
            marginRight="auto"
            href={imgUrl}
            isExternal
            _focus={{ outline: 'none', boxShadow: 'none' }}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
