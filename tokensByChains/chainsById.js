

const chains = [
    //=========================={                       }==============================
    //=========================={    NATIVE Tokens      }==============================
    //=========================={                       }==============================
  
    {
      chainId: 1,
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'ETH',
      logoUrl: 'https://govercity.com/assets/images/logos/eth.svg', // of token
      networkName: 'homestead',
      currency: 'ETH',
      decimals: 18,
      explorerName: 'Etherscan',
      explorerUrl: 'https://etherscan.io',
      explorerApi: 'https://api.etherscan.io/api',
      networkRpc: 'https://cloudflare-eth.com',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      icon: 'https://govercity.com/assets/images/logos/eth..svg',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'ETH',
    },
    {
      chainId: 137,
      name: 'Polygon', // of token
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'MATIC',
      logoUrl: 'https://govercity.com/assets/images/logos/matic.svg', // of token
      networkName: 'matic',
      currency: 'MATIC',
      decimals: 18,
      explorerName: 'PolygonScan',
      explorerUrl: 'https://polygonscan.com',
      explorerApi: 'https://api.polygonscan.com/api',
      networkRpc: 'https://polygon-rpc.com',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'POLYGON',
    },
    {
      chainId: 10,
      name: 'Optimism', // of token
      //address: '0x4200000000000000000000000000000000000042', // of token
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'op',
      logoUrl: 'https://govercity.com/assets/images/logos/op.svg', // of token
      networkName: 'optimism',
      currency: 'ETH',
      decimals: 18,
      explorerName: 'Etherscan',
      explorerUrl: 'https://optimistic.etherscan.io',
      explorerApi: 'https://api-optimistic.etherscan.io/api',
      networkRpc: 'https://mainnet.optimism.io',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'OP',
    },
    // No logo
    {
      chainId: 42161,
      name: 'Arbitrum One', // of token
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'ARBITRUM',
      logoUrl: 'https://govercity.com/assets/images/logos/', // of token
      networkName: 'arbitrum',
      currency: 'ETH',
      decimals: 18,
      explorerName: 'Arbiscan',
      explorerUrl: 'https://arbiscan.io',
      explorerApi: 'https://api.arbiscan.io/api',
      networkRpc: 'https://arb1.arbitrum.io/rpc',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'ARBITRUM',
    },
    {
      chainId: 56,
      name: 'Binance Smart Chain',
      symbol: 'BNB',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      logoUrl: 'https://govercity.com/assets/images/logos/bnb.svg', // of token
      networkName: 'Binance Smart Chain',
      currency: 'BNB',
      decimals: 18,
      explorerName: 'Bscscan',
      explorerUrl: 'https://bscscan.com/',
      explorerApi: '',
      networkRpc: 'https://rpc.ankr.com/bsc',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'BNB',
    },
  
    {
      chainId: 43114,
      name: 'Avalanche',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'ELA',
      logoUrl: 'https://govercity.com/assets/images/logos/avax.svg',
      networkName: 'Avalanche',
      currency: 'AVAX',
      decimals: 18,
      explorerName: '',
      explorerUrl: 'https://api.avax.network/ext/bc/C/rpc',
      explorerApi: '',
      networkRpc: 'https://api.avax.network/ext/bc/C/rpc',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'AVAX',
    },
    {
      chainId: 250,
      name: 'Fantom', // of token
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'FTM',
      logoUrl: 'https://govercity.com/assets/images/logos/ftm.svg', // of token
      networkName: 'Fantom', // ETHEREUM Network
      currency: 'FTM',
      decimals: 18,
      explorerName: 'ftmscan',
      explorerUrl: 'https://ftmscan.com/',
      explorerApi: '',
      networkRpc: 'https://rpc.ankr.com/fantom/',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'FTM',
    },
    // No logo
    {
      chainId: 100,
      name: 'Gnosis',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'XDAI',
      logoUrl: 'https://govercity.com/assets/images/logos/',
      networkName: 'Gnosis',
      currency: 'XDAI',
      decimals: 18,
      explorerName: '',
      explorerUrl: 'https://blockscout.com/xdai/mainnet/',
      explorerApi: '',
      networkRpc: 'https://rpc.gnosischain.com/',
      networkRpc2: 'https://rpc.ankr.com/gnosis',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'GNOSIS',
    },
    {
      chainId: 1313161554,
      name: 'Aurora',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'AURORA',
      logoUrl: 'https://govercity.com/assets/images/logos/',
      networkName: 'Aurora',
      currency: 'ETH',
      decimals: 18,
      explorerName: '',
      explorerUrl: 'https://aurorascan.dev/',
      explorerApi: '',
      networkRpc: 'https://mainnet.aurora.dev',
      networkRpc2: '',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'AURORA',
    }, // No logo
    {
      chainId: 8217,
      name: 'Klaytn Cypress',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', // of token
      symbol: 'KLAY',
      logoUrl: 'https://govercity.com/assets/images/logos/',
      networkName: 'Klaytn',
      currency: 'KLAY',
      decimals: 18,
      explorerName: '',
      explorerUrl: 'https://scope.klaytn.com/',
      explorerApi: '',
      networkRpc: 'https://rpc.ankr.com/klaytn',
      networkRpc2: 'https://public-node-api.klaytnapi.com/v1/cypress',
      icon: 'https://govercity.com/assets/images/logos/',
      type: 'NATIVE',
      networkDecimals: 18,
      chain: 'KLAYTN',
    },
    //=========================={                       }==============================
    //=========================={    TEST Tokens        }==============================
    //=========================={                       }==============================
  
    // create tokenSymbol as a new params for symbols and logoUrls for images we will be using from coinCompare for making API calls on prices
    // update the lis of tokens and add 20 new ERC20 tokens
  
    {
      chainId: 5,
      name: 'Goerli Ether',
      address: '', // of token
      symbol: 'GoerliETH',
      logoUrl: 'https://govercity.com/assets/images/logos/eth.svg', // of token
      networkName: 'goerli',
      currency: 'ETH',
      decimals: 18,
      explorerName: 'Etherscan',
      explorerUrl: 'https://goerli.etherscan.io',
      explorerApi: 'https://api-goerli.etherscan.io/api',
      networkRpc: 'https://rpc.ankr.com/eth_goerli',
      networkRpc2: 'https://rpc.ankr.com/gnosis',
      icon: 'https://govercity.com/assets/images/logos/eth..svg',
      type: 'TEST',
      networkDecimals: 18,
      chain: 'GOERLI',
    },
    {
      chainId: 80001,
      name: 'Polygon Mumbai',
      address: '', // of token
      symbol: 'MumbiaMATIC',
      logoUrl: 'https://govercity.com/assets/images/logos/matic.svg', // of token
      networkName: 'maticmum',
      currency: 'MATIC',
      decimals: 18,
      explorerName: 'PolygonScan',
      explorerUrl: 'https://mumbai.polygonscan.com',
      explorerApi: 'https://api-testnet.polygonscan.com/api',
      networkRpc: 'https://matic-mumbai.chainstacklabs.com',
      networkRpc2: '',
      type: 'TEST',
      networkDecimals: 18,
      chain: 'MUMBAI',
    },
    {
      chainId: 420,
      name: 'Optimism Goerli',
      address: '', // of token
      symbol: 'ETH',
      logoUrl: 'https://govercity.com/assets/images/logos/op.svg', // of token
      networkName: 'optimism-goerli',
      symbol: 'ETH',
      decimals: 18,
      explorerName: 'Etherscan',
      explorerUrl: 'https://goerli-optimism.etherscan.io',
      explorerApi: 'https://api-goerli-optimism.etherscan.io/api',
      networkRpc: 'https://goerli.optimism.io',
      networkRpc2: '',
      type: 'TEST',
      networkDecimals: 18,
      chain: 'OP',
    },
    // No Logo
    {
      chainId: 421613,
      name: 'Arbitrum Goerli Ether',
      address: '', // of token
      symbol: 'ETH',
      logoUrl: 'https://govercity.com/assets/images/logos/', // of token
      networkName: 'arbitrum-goerli',
      currency: 'ETH',
      decimals: 18,
      explorerName: 'Arbiscan',
      explorerUrl: 'https://goerli.arbiscan.io',
      explorerApi: 'https://api-goerli.arbiscan.io/api',
      networkRpc: 'https://goerli-rollup.arbitrum.io/rpc',
      networkRpc2: '',
      type: 'TEST',
      networkDecimals: 18,
      chain: 'ARBITRUM',
    },
    {
      chainId: 97,
      name: 'Smart Chain - Testnet',
      symbol: 'BNB',
      address: '',
      logoUrl: 'https://govercity.com/assets/images/logos/bnb.svg', // of token
      networkName: 'Binance Smart Chain',
      currency: 'BNB',
      decimals: 18,
      explorerName: 'Bscscan',
      explorerUrl: 'https://bscscan.com/',
      explorerApi: '',
      networkRpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      networkRpc2: '',
      type: 'TEST',
      networkDecimals: 18,
      chain: 'SMART CHAIN',
    },
    {
      chainId: 4002,
      name: 'Fantom',
      address: '', // of token
      symbol: 'FTM',
      logoUrl: 'https://govercity.com/assets/images/logos/ftm.svg', // of token
      networkName: 'Fantom', // ETHEREUM Network
      currency: 'FTM',
      decimals: 18,
      explorerName: 'ftmscan',
      explorerUrl: 'https://testnet.ftmscan.com/',
      explorerApi: '',
      networkRpc: 'https://rpc.testnet.fantom.network/',
      networkRpc2: 'https://rpc.ankr.com/multichain',
      type: 'TEST',
      networkDecimals: 18,
      chain: 'FTM',
    },
  ];
  
  export default chains;
  