import { modalState } from "@/states/modal";
import { useRecoilState } from "recoil";

export interface ModalOptions {
  modalKey: string;
  component: React.ReactNode;
}

export default function useModal() {
  const [{ props: modals }, setModal] = useRecoilState(modalState);

  const openModal = (options: ModalOptions) => {
    // push to modals
    setModal((modal) => ({
      props: [
        ...modal.props,
        {
          modalKey: options.modalKey,
          component: options.component,
        },
      ],
    }));
  };

  const close = (key?: string) => {
    if (!key) {
      setModal(() => ({
        props: [],
      }));
      return;
    }

    // remove from modals
    setModal(() => ({
      props: modals.filter((modal) => modal.modalKey !== key),
    }));
  };

  return {
    modals,
    openModal,
    close,
  };
}
