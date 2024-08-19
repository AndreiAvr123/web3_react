import React from 'react';
import { Layout, Menu } from 'antd';
import JokesList from 'components/Jokes/JokesList';
import { Routes, Route, Link } from 'react-router-dom';
import OneJoke from 'components/Jokes/OneJoke';
import About from 'components/About/About';

const { Header, Content } = Layout;

const App = () => {

  const menuItems = [
    {
      key: 'jokes',
      label: <Link to="/jokes">Jokes</Link>
    },
    {
      key: 'about',
      label: <Link to="/about">About</Link>
    }
  ];

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]} items={menuItems} />
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <Routes>
          <Route path="/" element={<h1>Here's the Jokes !!!</h1>} />
          <Route path="/jokes" element={<JokesList />} />
          <Route path="/jokes/:id" element={<OneJoke />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
