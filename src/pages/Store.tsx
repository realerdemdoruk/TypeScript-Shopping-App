import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { motion } from "framer-motion";

export function Store() {
  const itemVariants = {
    hidden: {
      opacity: 0,
      translateX: -50, // Başlangıçta sol tarafta (-50) başlayacak
    },
    visible: {
      opacity: 1,
      translateX: 0, // Sağa doğru (0) hareket edecek
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Her bir çocuğun gecikmeli olarak gelmesi
      },
    },
  };

  return (
    <>
      <h1>Store</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <StoreItem {...item} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </>
  );
}
