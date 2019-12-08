import React from 'react';
import {
  Typography,
  Tag,
  Card,
  Row,
  Col,
  Icon,
  Upload,
  Button,
} from 'antd';

import Scaffold from '../../components/scaffold';

export default function Terminal() {
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [],
  };

  return (
    <Scaffold>
      <Typography.Title>
        Terminal
      </Typography.Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title="Cartão CNPJ"
            extra={(<Icon type="check" fill="green" />)}
          >
            <Row>
              <Tag color="green">ANTAC</Tag>
              <Tag color="green">ANVISA</Tag>
              <Tag color="green">CODESP</Tag>
            </Row>
            <div style={{ height: 8 }} />
            <Row>
              <Tag color="green">RECEITA FEDERAL</Tag>
              <Tag color="green">Vigiagro</Tag>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Titulo"
            extra={(<Icon type="check" fill="green" />)}
          >
            <Row>
              <Tag color="green">ANTAC</Tag>
              <Tag color="green">ANVISA</Tag>
              <Tag color="green">CODESP</Tag>
            </Row>
            <div style={{ height: 8 }} />
            <Row>
              <Tag color="green">RECEITA FEDERAL</Tag>
              <Tag color="green">Vigiagro</Tag>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Titulo"
            extra={(<Icon type="check" fill="green" />)}
          >
            <Row>
              <Tag color="green">ANTAC</Tag>
              <Tag color="green">ANVISA</Tag>
              <Tag color="green">CODESP</Tag>
            </Row>
            <div style={{ height: 8 }} />
            <Row>
              <Tag color="green">RECEITA FEDERAL</Tag>
              <Tag color="green">Vigiagro</Tag>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            title="Titulo"
            extra={(<Icon type="check" fill="green" />)}
          >
            <Row>
              <Tag color="green">ANTAC</Tag>
              <Tag color="green">ANVISA</Tag>
              <Tag color="green">CODESP</Tag>
            </Row>
            <div style={{ height: 8 }} />
            <Row>
              <Tag color="green">RECEITA FEDERAL</Tag>
              <Tag color="green">Vigiagro</Tag>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Titulo"
          >
            <Row>
              <Tag color="green">ANTAC</Tag>
              <Tag color="green">ANVISA</Tag>
              <Tag color="red">CODESP</Tag>
            </Row>
            <div style={{ height: 8 }} />
            <Row>
              <Tag color="red">RECEITA FEDERAL</Tag>
              <Tag color="green">Vigiagro</Tag>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Upload {...props}>
            <Button>
              <Icon type="upload" />
              Enviar documentos
            </Button>
          </Upload>
        </Col>
      </Row>
    </Scaffold>
  );
}
