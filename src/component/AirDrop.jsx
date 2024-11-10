import { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

function Airdrop() {
  const [solanaAddress, setSolanaAddress] = useState('');
  const [status, setStatus] = useState('');

  const airdropSol = async () => {
    if (!solanaAddress) {
      alert('Please enter a valid Solana address');
      return;
    }

    try {
      // Create a connection to Solana's Devnet
      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
      const publicKey = new PublicKey(solanaAddress);
      
      // Request an airdrop of 1 SOL (1 SOL = LAMPORTS_PER_SOL lamports)
      const airdropSignature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);

      // Confirm the transaction
      setStatus(`1 SOL airdropped to ${solanaAddress}`);
    } catch (error) {
      console.error('Error during airdrop:', error);
      setStatus('Failed to airdrop SOL. Please check the console for details.');
    }
  };

  return (
    <div>
      <h2>Solana Airdrop</h2>
      <input
        type="text"
        value={solanaAddress}
        onChange={(e) => setSolanaAddress(e.target.value)}
        placeholder="Enter Solana account address"
      />
      <button onClick={airdropSol}>Airdrop 1 SOL</button>
      <p>{status}</p>
    </div>
  );
}

export default Airdrop;
