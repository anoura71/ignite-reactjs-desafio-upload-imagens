import {
  Box,
  Flex,
  Button,
  Text,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="pGray.800" justifyContent="space-between">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={20}
          py={6}
        >
          <Image src="logo.svg" h={[7, 10]} marginRight="3" />

          <Button width="auto" onClick={() => onOpen()}>
            <Text fontSize={['xs', 'lg']} isTruncated>
              Adicionar imagem
            </Text>
          </Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
