import * as React from 'react';
import {
  Typography,
  Table,
  Tag,
} from 'antd';

import { Link } from 'react-router-dom';

import { CompanyLogo } from './styles';
import Scaffold from '../../components/scaffold';

import BTP from '../../assets/icons/btp.png';
import DPW from '../../assets/icons/dpw.png';
import ECO from '../../assets/icons/eco.png';
import SBP from '../../assets/icons/sbp.png';
import TRB from '../../assets/icons/trb.png';

const columns = [
  {
    title: '',
    width: '60px',
    render: (record) => {
      switch (record.name) {
        case 'BTP':
          return (
            <CompanyLogo src={BTP} />
          );
        case 'DPW':
          return (
            <CompanyLogo src={DPW} />
          );
        case 'ECO':
          return (
            <CompanyLogo src={ECO} />
          );
        case 'SBP':
          return (
            <CompanyLogo src={SBP} />
          );
        case 'TRB':
          return (
            <CompanyLogo src={TRB} />
          );
        default:
          return null;
      }
    },
  },
  {
    title: 'Terminal',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Aguardando Documentação') {
            color = 'volcano';
          }
          if (tag === 'Documentos Ok') {
            color = 'lightgreen';
          }
          if (tag === 'Data em atraso') {
            color = 'yellow';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Ações',
    key: 'action',
    align: 'center',
    render: () => (
      <span>
        <Link to="/terminal">Enviar documentos</Link>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'BTP',
    tags: ['Aguardando Documentação'],
  },
  {
    key: '2',
    name: 'DPW',
    tags: ['Documentos Ok'],
  },
  {
    key: '3',
    name: 'ECO',
    tags: ['Data em atraso'],
  },
  {
    key: '4',
    name: 'TRB',
    tags: ['Data em atraso'],
  },
  {
    key: '5',
    name: 'SBP',
    tags: ['Data em atraso'],
  },
];


const Home = () => (
  <Scaffold>
    <Typography.Title>Terminais</Typography.Title>
    <Table columns={columns} dataSource={data} />
  </Scaffold>
);

export default Home;
