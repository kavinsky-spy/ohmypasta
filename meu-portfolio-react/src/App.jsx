import NodePage from './components/node/NodePage';

// App de exemplo
function App() {
  // CONFIGURAÇÃO - TROQUE PELOS SEUS VALORES!
  const drupalUrl = 'https://ohmypasta.ddev.site'; // SEM barra no final
  const nodeId = '1fbc12ae-3357-4729-8fe7-931240992e1a'; // UUID do seu node

  return (
    <div className="App" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      <NodePage nodeId={nodeId} drupalUrl={drupalUrl} />
    </div>
  );
}

export default App;
