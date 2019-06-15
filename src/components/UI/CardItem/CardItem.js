import React from "react";
import { Card, Skeleton } from "antd";

const { Meta } = Card;

function CardItem({ item, loading }) {
    return (
        <Skeleton loading={loading} active paragraph={{ rows: 5 }}>
            <Card
                hoverable
                cover={<img alt={item.name} src={item.photos} />}
                style={{ flex: "1" }}
            >
                <Meta
                    title={item.name}
                    description={item.address}
                    style={{ textAlign: "left" }}
                />
            </Card>
        </Skeleton>
    );
}

export default CardItem;
