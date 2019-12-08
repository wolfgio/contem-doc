import React from "react";
import { Typography, Tag, Row, Col, Icon, Upload, Button, Divider } from "antd";

import Scaffold from "../../components/scaffold";
import { Card, MainContainer } from "./styles";

import data from "./data";

export default function Terminal() {
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    defaultFileList: []
  };

  const textData = data;

  return (
    <Scaffold>
      <Typography.Title style={{ color: '#04c3d9'}}>Documentos para Operação</Typography.Title>

      <MainContainer>
        {textData.map(data => (
          <Card extra={<Icon type="check" fill="green" />}>
            <Typography.Title
              style={{
                fontSize: '14px',
                color: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              {data.title}
            </Typography.Title>
            <Divider style={{ marginBottom: 0 }} />
            <Row>
              {data.orgaos.map(orgao => (
                <Tag
                  color="green"
                  style={{ marginRight: "10px", marginTop: "10px" }}
                >
                  {orgao}
                </Tag>
              ))}
            </Row>
            <Divider />
            <Row>
              <Button
                type="primary"
                icon="upload"
                style={{ marginRight: "1em" }}
              >
                Enviar documento
              </Button>

              <Button type="" icon="search">
                Detalhes
              </Button>
            </Row>
          </Card>
        ))}

        <Card title="Titulo">
          <Typography.Title
            style={{
              fontSize: '14px',
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            CARTÃO CNPJ
          </Typography.Title>
          <Divider style={{ marginBottom: 0 }} />
          <Row>
            <Tag style={{ marginRight: "10px", marginTop: "10px" }} color="green">ANTAC</Tag>
            <Tag style={{ marginRight: "10px", marginTop: "10px" }} color="yellow">ANVISA</Tag>
            <Tag style={{ marginRight: "10px", marginTop: "10px" }} color="red">CODESP</Tag>
            <Tag style={{ marginRight: "10px", marginTop: "10px" }} color="red">RECEITA FEDERAL</Tag>
            <Tag style={{ marginRight: "10px", marginTop: "10px" }} color="green">VIGIAGRO</Tag>
          </Row>
          <Divider />
          <Row gutter={[16, 16]} style={{ margin: 0 , position: 'relative'}}>
            <Upload {...props}>
              <Button
                type="primary"
                icon="upload"
                style={{ marginRight: "1em" }}
              >
                Enviar documento
              </Button>
            </Upload>
            <Button type="" icon="search" style={{
              top: 0,
              right: 0,
              position: 'absolute',
            }}>
              Detalhes
            </Button>
          </Row>
        </Card>
      </MainContainer>
    </Scaffold>
  );
}
