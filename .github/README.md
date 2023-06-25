# V-Lance - A Freelancer Passport
Vercel link: https://verilancer-fe.vercel.app/


## About V-Lance
V-Lance is a freelance service marketplace that aims to address the issue of trust and transparency in the freelance industry. Existing freelance platforms suffer from fake reviews and plagiarized projects, making it difficult to find reliable freelancers.

V-Lance seeks to establish credibility through on-chain verification and offers a private way to showcase work history and track records without KYC.

Freelancers can bid on projects, connect with others, and receive proof of work in the form of soulbound NFTs. Collaboration and timely completion of projects are encouraged, while organizations can find verified and competent freelancers. V-Lance utilizes Web3 technologies and ZK proofs to provide users with verified reviews, projects, and secure payments through an escrow system.

### How it's Made
This project uses Talent Layer to implement a freelancing marketplace.

We are using Sismo to provide zk proofs of a user's contributions to notable github repos as a credibility measure.

We're using The Graph’s subgraphs to query our smart contract in real time to identify addresses verified as github contributors.

Nouns assets from the Nouns DAO are randomly deployed as soulbound NFTs for proof of professional work.

Ethereum Attestation service is used to add credibility to freelancers' claims about work experience.

All these together help freelancers build their credibility on chain.

Note: The smart contract supporting Vlance is here: https://github.com/alinobrasil/vlance_contracts


## Requirements

- Node & npm

## Step-by-Step Setup

- `npm install`

Dotenv needs to contain necessary keys. 
- `cp .env.example .env`
- `npm run dev`
- Add the sismo appId in config.ts

