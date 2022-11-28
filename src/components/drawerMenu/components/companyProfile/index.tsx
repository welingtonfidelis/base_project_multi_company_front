import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ModalFooter } from "@chakra-ui/react";

import { AvatarContent, AvatarImage } from "./styles";
import { Props } from "./types";

import { Modal } from "../../../modal";
import { Preloader } from "../../../preloader";
import { useGetProfile } from "../../../../services/requests/company";
import { companyStore } from "../../../../store/company";

import logoImage from "../../../../assets/logo.png";
import { BordedContainer } from "../../../../shared/styles/input";

export const CompanyProfile = (props: Props) => {
  const { isOpen, onClose } = props;
  const { t } = useTranslation();
  const { updateCompany } = companyStore();
  const { data, isLoading } = useGetProfile();

  const initialValues = useMemo(() => {
    if (data) updateCompany(data);

    return {
      id: data?.id || 0,
      name: data?.name || "",
      phone: data?.phone || "",
      email: data?.email || "",
      image_url: data?.image_url || "",
    };
  }, [data]);

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal
      title={t("components.profile.page_title")}
      onConfirm={() => {}}
      isOpen={isOpen}
      onClose={handleCloseModal}
      deactiveModalButtons
    >
      <Preloader isLoading={isLoading}>
        <AvatarContent>
          <AvatarImage src={data?.image_url || logoImage} />
        </AvatarContent>

        <BordedContainer>{initialValues.name}</BordedContainer>

        <ModalFooter paddingEnd={0}>
          <Button onClick={handleCloseModal} colorScheme="gray" marginEnd={"2"}>
            {t("generic.button_ok")}
          </Button>
        </ModalFooter>
      </Preloader>
    </Modal>
  );
};
