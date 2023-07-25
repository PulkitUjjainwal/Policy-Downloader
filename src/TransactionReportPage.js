import React from 'react';
import { Table, Button } from 'antd';
import './TransactionReportPage.css';

const TransactionReportPage = () => {

  const data = [
    {
      product_name: 'Product A',
      name: 'John Doe',
      phone_number: '1234567890',
      email: 'john.doe@example.com',
      premium_paid: '$2000',
      insurer: 'Insurer A',
      sum_assured: '$50,000',
      date_of_insurance: '2022-01-01',
      date_of_expiry: '2023-01-01',
      policy_number: 'POL-001',
    },
    {
      product_name: 'Product B',
      name: 'Jane Smith',
      phone_number: '9876543210',
      email: 'jane.smith@example.com',
      premium_paid: '$1800',
      insurer: 'Insurer B',
      sum_assured: '$40,000',
      date_of_insurance: '2022-02-01',
      date_of_expiry: '2023-02-01',
      policy_number: 'POL-002',
    },

  ];

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Email ID',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Premium Paid',
      dataIndex: 'premium_paid',
      key: 'premium_paid',
    },
    {
      title: 'Insurer',
      dataIndex: 'insurer',
      key: 'insurer',
    },
    {
      title: 'Sum Assured',
      dataIndex: 'sum_assured',
      key: 'sum_assured',
    },
    {
      title: 'Date of Insurance',
      dataIndex: 'date_of_insurance',
      key: 'date_of_insurance',
    },
    {
      title: 'Date of Expiry',
      dataIndex: 'date_of_expiry',
      key: 'date_of_expiry',
    },
    {
      title: 'Policy Number',
      dataIndex: 'policy_number',
      key: 'policy_number',
    },
  ];


  const downloadPolicyData = () => {
    // Convert data to JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Create a Blob from the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a temporary link and click it to trigger the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'policy_data.json';
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary link
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <div className="transaction-report-page">
      <h1 className="transaction-report-page-heading">Transaction Report</h1>

      <Table
        className="transaction-report-table"
        dataSource={data}
        columns={columns}
        rowKey="policy_number"
        pagination={{ pageSize: 10 }}
      />

      <Button type="primary" onClick={downloadPolicyData}>
        Download Policy Data (JSON)
      </Button>
    </div>
  );
};

export default TransactionReportPage;
