import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CreateNewsForm from "../CreateNewsForm/CreateNewsForm";
import EditNews from "../EditNews/EditNews";

const NewsModal = ({ tags, setNews, id, create = true, news }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{create ? "Create News" : <EditIcon />}</Button>
      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{create ? "Create" : "Edit"} News</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {create ? (
              <CreateNewsForm tags={tags} onClose={onClose} setNews={setNews} />
            ) : (
              <EditNews id={id} news={news} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewsModal;
