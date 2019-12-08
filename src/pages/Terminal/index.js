import React from 'react';
import {
  Typography,
  Tag,
  Row,
  Icon,
  Upload,
  Button,
  Divider,
  Modal,
} from 'antd';

import Scaffold from '../../components/scaffold';
import { Card, MainContainer } from './styles';

import data from './data';

class Terminal extends React.PureComponent {
  state = {
    showModal: false,
    files: [],
  };

  textData = data;

  onShowModal = () => this.setState({
    showModal: true,
    files: this.upload.state.fileList,
  });

  onHideModal = () => this.setState({
    showModal: false,
    files: [],
  });

  render() {
    const { files, showModal } = this.state;
    return (
      <Scaffold selectedKey="3">
        <Typography.Title style={{ color: '#04c3d9' }}>Documentos para Operação</Typography.Title>
        <MainContainer>
          {this.textData.map(item => (
            <Card extra={<Icon type="check" fill="green" />}>
              <Typography.Title
                style={{
                  fontSize: '14px',
                  color: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                {item.title}
              </Typography.Title>
              <Divider style={{ marginBottom: 0 }} />
              <Row>
                {item.orgaos.map(orgao => (
                  <Tag
                    color="green"
                    style={{ marginRight: '10px', marginTop: '10px' }}
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
                  style={{ marginRight: '1em' }}
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
              <Tag style={{ marginRight: '10px', marginTop: '10px' }} color="green">ANTAC</Tag>
              <Tag style={{ marginRight: '10px', marginTop: '10px' }} color="yellow">ANVISA</Tag>
              <Tag style={{ marginRight: '10px', marginTop: '10px' }} color="red">CODESP</Tag>
              <Tag style={{ marginRight: '10px', marginTop: '10px' }} color="red">RECEITA FEDERAL</Tag>
              <Tag style={{ marginRight: '10px', marginTop: '10px' }} color="green">VIGIAGRO</Tag>
            </Row>
            <Divider />
            <Row gutter={[16, 16]} style={{ margin: 0, position: 'relative' }}>
              <Upload
                ref={(upload) => { this.upload = upload; }}
                action="http://hacka-abtra.qrhrmqgwh8.sa-east-1.elasticbeanstalk.com/parseDoc"
                listType="picture"
                defaultFileList={[]}
                name="fileDoc"
              >
                <Button
                  type="primary"
                  icon="upload"
                  style={{ marginRight: '1em' }}
                >
                  Enviar documento
                </Button>
              </Upload>
              <Button
                icon="search"
                style={{
                  top: 0,
                  right: 0,
                  position: 'absolute',
                }}
                onClick={this.onShowModal}
              >
                Detalhes
              </Button>
            </Row>
          </Card>
        </MainContainer>
        <Modal
          title="Detalhes"
          visible={showModal}
          onCancel={this.onHideModal}
          footer={(<Button onClick={this.onHideModal}>Fechar</Button>)}
          style={{ maxHeight: '300px' }}
        >
          {files.map(file => (
            <Card key={Math.random()} mode="details">
              <Typography.Title
                style={{
                  fontSize: '14px',
                }}
              >
                {file.name}
              </Typography.Title>
              <Divider />
              {file.response}
            </Card>
          ))}
        </Modal>
      </Scaffold>
    );
  }
}

export default Terminal;
