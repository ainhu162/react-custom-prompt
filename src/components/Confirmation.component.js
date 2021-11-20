import { Button, Modal } from "antd";
import { useEffect, useState } from "react";

export const Confirmation = ({
  isShowConfirmation,
  titleText,
  contentText,
  cancelButtonText,
  confirmButtonText,
  discardText,
  onDiscard,
  onCancel,
  onConfirm,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(isShowConfirmation);
  }, [isShowConfirmation]);

  const handleOk = () => {
    setIsModalVisible(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    onCancel();
  };

  const handleDiscard = () => {
    setIsModalVisible(false);
    onDiscard && onDiscard();
  };

  return (
    <>
      <Modal
        title={titleText}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="ghost" onClick={handleDiscard}>
            {discardText}
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            {confirmButtonText}
          </Button>,
          <Button key="link" onClick={handleCancel}>
            {cancelButtonText}
          </Button>,
        ]}
      >
        <p>{contentText}</p>
      </Modal>
    </>
  );
};
