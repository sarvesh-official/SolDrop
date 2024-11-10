import './App.css'
import Airdrop from './component/AirDrop'

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>🌞 Solana Airdropper</h1>
          <p>Bringing SOL to your wallet, one airdrop at a time!</p>
          <p><strong>Note:</strong> This will only reflect on the Solana Devnet 🌐</p>
        </header>
        
        <div className="app-content">
          <Airdrop />
        </div>

        <footer className="footer">
          <p>👨‍💻 Created by: <strong>SARVESH</strong></p>
          <p>This is my <strong>first step</strong> into Web3! 🚀</p>
          <p>Not bad for a first project, huh? 😄</p>
        </footer>
      </div>
    </>
  );
}

export default App;
