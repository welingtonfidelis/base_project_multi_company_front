import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, ModalFooter } from "@chakra-ui/react";

import { AvatarContent, AvatarImage, InfoContent } from "./styles";
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

  useEffect(() => {
    if (data) updateCompany(data);
  }, [data]);

  return (
    <Modal
      title={t("components.company_profile.page_title")}
      onConfirm={() => {}}
      isOpen={isOpen}
      onClose={onClose}
      deactiveModalButtons
    >
      <Preloader isLoading={isLoading}>
        <AvatarContent>
          <AvatarImage src={data?.image_url || logoImage} />
        </AvatarContent>

        <InfoContent>
          <span>{t("components.company_profile.input_name")}</span>
          <BordedContainer>{data?.name}</BordedContainer>

          <span>{t("components.company_profile.input_email")}</span>
          <BordedContainer>{data?.email}</BordedContainer>

          <span>{t("components.company_profile.input_phone")}</span>
          <BordedContainer>{data?.phone}</BordedContainer>
        </InfoContent>

        <ModalFooter paddingEnd={0}>
          <Button onClick={onClose} colorScheme="gray" marginEnd={"2"}>
            {t("generic.button_ok")}
          </Button>
        </ModalFooter>
      </Preloader>
    </Modal>
  );
};
