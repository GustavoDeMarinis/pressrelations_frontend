import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CreateNewsForm from "../CreateNewsForm/CreateNewsForm";

const CreateNewsModal = ({ tags }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Create News
      </Button>
      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create News</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateNewsForm tags={tags} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNewsModal;
