import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Scaffold from "../../../components/scaffold";
import { Popover, Button, Modal, Card } from "antd";
import ships from "./ships";

// eslint-disable-next-line react/prefer-stateless-function
export class MapScreen extends Component {
  state = {
    visible: false,
    showModal: false,
    ships: ships,
    ship: {}
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  onClickMap = ship => {
    this.setState({
      visible: true,
      ship
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const { visible, ships } = this.state;
    return (
      <Scaffold selectedKey="1">
        <Map
          google={this.props.google}
          initialCenter={{
            lat: -23.95109,
            lng: -46.35358
          }}
          zoom={14}
        >
          {ships.map(ship => (
            <Marker
              onClick={() => this.onClickMap(ship)}
              onMouseover={() => console.log("teste")}
              name={"Current location"}
              position={{ lat: ship.cords.lat, lng: ship.cords.long }}
              icon={{
                url: require("../../../assets/img/marker-1.png"),
                scaledSize: {
                  width: 32,
                  height: 32
                }
              }}
            />
          ))}
        </Map>
        <Modal
          title={this.state.ship.name}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Card title="MA LIAN HAI">
            <img
              src={this.state.ship.img}
              style={{
                width: "100%"
              }}
            />
            <p>TIPO DE EMBARCACAO : {this.state.ship.type}</p>
            <p>IMO : {this.state.ship.IMO}</p>
            <p>Indicativo : {this.state.ship.Indicativo}</p>
            <p>Bandeira: {this.state.ship.Bandeira}</p>
            <p>TIPO DE CARGA : {this.state.ship.ship_type}</p>
            <p>CARGA TOTAL : {this.state.ship.ton}</p>
            <p>PORTE : {this.state.ship.port}</p>
            <p>TAMANHO : {this.state.ship.length}</p>

            <p>Construcao : {this.state.ship.construction}</p>
            <p>Status : {this.state.ship.state}</p>
          </Card>
        </Modal>
      </Scaffold>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBfLOliiKpoIS92iQWO4d9ChGvUDPdSqD8"
})(MapScreen);
