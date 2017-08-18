import React from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Row, Col } from 'react-bootstrap';
import DashboardView from '../../Layouts/DashboardView';
import Data from '../../Config/data';

const TablePage = () => {
  const styles = {
    editButton: {
      fill: grey500,
    },
    columns: {
      id: {
        width: '10%',
      },
      name: {
        width: '40%',
      },
      price: {
        width: '20%',
      },
      category: {
        width: '20%',
      },
      edit: {
        width: '10%',
      },
    },
  };

  return (
    <DashboardView
      title="Table"
    >
      <Row>
        <Col xs={12}>
          <h3 className="title">Media</h3>
        </Col>
      </Row>
    </DashboardView>
  );
};

export default TablePage;
