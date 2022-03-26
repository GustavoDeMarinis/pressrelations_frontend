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

const NewsModal = ({ tags, setNews, id, edit = false, news, forceUpdate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{edit ? <EditIcon /> : "Create News"}</Button>
      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{edit ? "Edit" : "Create"} News</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {edit ? (
              <EditNews
                id={id}
                forceUpdate={forceUpdate}
                onClose={onClose}
                setNews={setNews}
              />
            ) : (
              <CreateNewsForm
                tags={tags}
                onClose={onClose}
                setNews={setNews}
                forceUpdate={forceUpdate}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewsModal;
