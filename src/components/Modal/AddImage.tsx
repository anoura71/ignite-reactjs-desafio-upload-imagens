import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useScreen } from '../../hooks/useScreen';

import { FormAddImage } from '../Form/FormAddImage';

interface ModalAddImageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalAddImage({
  isOpen,
  onClose,
}: ModalAddImageProps): JSX.Element {
  // Responsiveness
  const { isWideScreen } = useScreen();

  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />

      <ModalContent
        width="100%"
        height="100%"
        maxWidth={['270px', '360px', '630px', '900px', '900px']}
        maxHeight={isWideScreen ? '600px' : '420px'}
        marginX="auto"
        marginY="2.5rem"
        bgColor="pGray.900"
      >
        <ModalHeader fontSize={['xl', '2xl', '3xl', '4xl', '4xl']}>
          Nova imagem
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody px={[10, 20, 40, 60, 60]}>
          <FormAddImage closeModal={handleCloseModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
