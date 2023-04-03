import { Button, Modal, Result } from "antd";
import { Link } from "react-router-dom";
export const PurchaseCompleteModal = (props: any) => {
  const { open, setIsModalOpen } = props;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={open} footer={null} closable={false}>
        <Result
          status="success"
          title="正常に購入が完了しました！"
          extra={[
            <Link to="/" key="GoIndex">
              <Button type="primary">続けて買い物</Button>
            </Link>,
            <Button key="closeModal" onClick={closeModal}>
              閉じる
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
};
