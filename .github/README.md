# V-Lance - A Freelancer Passport
Vercel link: https://verilancer-vl.vercel.app/ 
Demo video: https://youtu.be/A6M4bPAKd8M

# Submission for EthWaterloo 2023 
<img width="2021" alt="Screenshot 2023-06-26 at 5 05 57 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/d7773865-770a-4db4-b6cc-fba543de84af">


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

Note: 
- The smart contract supporting Vlance is here: https://github.com/alinobrasil/vlance_contracts
- The subgraph supporting Vlance is here: https://github.com/NamdarS/vlance_subgraph

  
## Pitch Deck 
<img width="1526" alt="Screenshot 2023-06-26 at 5 02 50 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/eb1211d2-ed61-4b3f-98df-341689bc1bb4">
<img width="1524" alt="Screenshot 2023-06-26 at 5 02 55 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/c8960790-aa83-42ae-aaa3-26981e8c5867">
<img width="1525" alt="Screenshot 2023-06-26 at 5 03 00 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/5f592d0b-cfa1-41c7-b852-9915961f8782">
<img width="1523" alt="Screenshot 2023-06-26 at 5 03 06 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/1e9720dd-97e9-4d86-bf24-c7660c7f84c5">
<img width="1525" alt="Screenshot 2023-06-26 at 5 03 10 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/5d288ec6-abdd-48ca-9c35-d8c975934085">
<img width="1523" alt="Screenshot 2023-06-26 at 5 03 15 PM" src="https://github.com/erwinqxy/verilancer-fe/assets/72030222/3ad86502-8161-418a-8852-1da114016a85">


## Requirements

- Node & npm

## Step-by-Step Setup

- `npm install`

Dotenv needs to contain necessary keys. 
- `cp .env.example .env`
- `npm run dev`
- Add the sismo appId in config.ts

