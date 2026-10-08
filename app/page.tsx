import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>BountyForge</h1><p>Open bounties with escrow, review, and payout workflows.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
